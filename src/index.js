function displayPoem(response) {
  new Typewriter("#poem-space", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 40,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector("#prompt-input");
  let apiKey = "98t4637f40718369c12fo73b34e16a06";
  let prompt = `Please generate a poem about ${instructions.value} within 6 lines.`;
  let context =
    "You are a romantic poet. Be concise and use as little words as possible. Generate all text in HTML format and separate all sentences with <br />.  All text align left and do not generate a title. Sign off with '- SheCodes AI'.";
  let poem = document.querySelector("#poem-space");
  poem.innerHTML = `<div class="blink"> ✨Generating a poem about ${instructions.value}...</div>`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  let poemElement = document.querySelector("#poem-space");
  poemElement.classList.remove("hidden");
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
