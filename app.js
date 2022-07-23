let input = document.getElementById("my-text");
let redactedText = document.getElementById("redacted-word");

let replacementText = document.getElementById("replacement-text");
let answerSpace = document.querySelector(".res");
let form = document.getElementById("info");
form.addEventListener("submit", redact);

function redact(e) {
  let paragraph = document.createElement("p");

  let lcRedacted = new RegExp(redactedText.value, "gi");
  let banned = redactedText.value.split(" ");
  let changedText = input.value.replaceAll(lcRedacted, "***");
  let changedTextWithNew = input.value.replaceAll(
    lcRedacted,
    replacementText.value
  );

  if (replacementText.value === "" && redactedText.value !== "") {
    if (banned.length === 1) {
      paragraph.innerText = changedText;
      //console.log(banned);
    } else {
      console.log(banned);
      banned.forEach((bannedWord) => {
        console.log(bannedWord);

        while (changedText.toLowerCase().indexOf(bannedWord) !== -1) {
          let lcBannedWord = new RegExp(bannedWord, "gi");
          changedText = changedText.replaceAll(lcBannedWord, "***");
          console.log(changedText);
        }
      });
      paragraph.innerText = changedText;
    }
  } else if (replacementText.value !== "" && redactedText.value !== "") {
    if (banned.length < 2) {
      paragraph.innerText = changedTextWithNew;
      //console.log(banned);
    } else {
      banned.forEach((bannedWord) => {
        //console.log(bannedWord);

        while (changedTextWithNew.toLowerCase().indexOf(bannedWord) !== -1) {
          let lcBannedWord = new RegExp(bannedWord, "gi");
          changedTextWithNew = changedTextWithNew.replaceAll(
            lcBannedWord,
            replacementText.value
          );
        }
        paragraph.innerText = changedTextWithNew;
      });
    }
  } else {
    alert("Please fill in all fields");
  }

  answerSpace.appendChild(paragraph);

  input.value = "";
  replacementText.value = "";
  redactedText.value = "";
  e.preventDefault();
}
