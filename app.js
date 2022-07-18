let input = document.getElementById("my-text");
let submitButton = document.getElementById("submit-text");
let redactedText = document.getElementById("redacted-word");

let replacementText = document.getElementById("replacement-text");
let answerSpace = document.querySelector(".res");
let form = document.getElementById("info");
form.addEventListener("submit", redact);
let params = {
  input: [],
  redacted: [],
  redactedMultiple: [],
  replacementText: ["***"],
};
// input.addEventListener("input", (e) => {
//   params.input.push(e.target.value);
//   if (params.input.length > 1) {
//     params.input.shift();
//   }
// });
// redactedText.addEventListener("input", (e) => {
//   params.redacted.push(e.target.value);
//   if (params.redacted.length > 1) {
//     params.redacted.shift();
//   }
// });
// replacementText.addEventListener("input", (e) => {
//   params.replacementText.push(e.target.value);
//   if (params.replacementText.length > 1) {
//     params.replacementText.shift();
//   }
// });

function redact(e) {
  let paragraph = document.createElement("p");
  let banned = redactedText.value.split(" ");
  let changedText = input.value.replaceAll(redactedText.value, "***");
  let changedTextWithNew = input.value.replaceAll(
    redactedText.value,
    replacementText.value
  );
  let arr = [];
  if (replacementText.value === "" && redactedText.value !== "") {
    if (banned.length < 2) {
      paragraph.innerText = changedText;
      console.log(banned);
    } else {
      banned.forEach((bannedWord) => {
        console.log(bannedWord);

        while (changedText.indexOf(bannedWord) !== -1) {
          changedText = changedText.replace(bannedWord, "***");
        }
        paragraph.innerText = changedText;
      });
    }
  } else if (replacementText.value !== "" && redactedText.value !== "") {
    if (banned.length < 2) {
      paragraph.innerText = changedTextWithNew;
      console.log(banned);
    } else {
      banned.forEach((bannedWord) => {
        console.log(bannedWord);

        while (changedTextWithNew.indexOf(bannedWord) !== -1) {
          changedTextWithNew = changedTextWithNew.replace(
            bannedWord,
            replacementText.value
          );
        }
        paragraph.innerText = changedTextWithNew;
      });
    }
  }

  answerSpace.appendChild(paragraph);

  input.value = "";
  replacementText.value = "";
  redactedText.value = "";
  e.preventDefault();
}
