function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-space", {
    strings:
      "No longer do I listen for the scrape of a keel, On the blank stones of the landing.",
    autoStart: true,
    cursor: " ",
    delay: 40,
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
