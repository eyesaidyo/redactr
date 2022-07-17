let input = document.getElementById("my-text");
let submitButton = document.getElementById("submit-text");
let redactedText = document.getElementById("redacted-word");
submitButton.addEventListener("click", redact);
let replacementText = document.getElementById("replacement-text");
let params = {
  input: "",
  redacted: "",
  replacementText: "",
};
input.addEventListener("input", (e) => {
  params.input = e.target.value;
});
redactedText.addEventListener("input", (e) => {
  params.redacted = e.target.value;
});
replacementText.addEventListener("input", (e) => {
  params.replacementText = e.target.value;
});

function redact(e) {
  if (params.input !== "" && params.redacted !== "") {
    let splitWords = params.input.split(" ");
    if (splitWords.includes(params.redacted)) {
      let para = document.createElement("p");
      splitWords.forEach((elem) => {});
    }
  }
}
