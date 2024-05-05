const LETTER_COLOR = {
  F: "255, 0, 0",
  R: "0, 255, 0",
  C: "0, 110, 255",
  B: "0, 150, 115",
  E: "255, 255, 0",
  D: "255, 0, 255",
  V: "0, 255, 255",
  T: "255, 128, 0",
  P: "255, 255, 255",

  undefined: "0, 255,241",
};

const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");

wrapper.addEventListener("mousemove", (event) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //const letter = card.innerText.textContent[0];
    const letter = card.getAttribute("data-letter");
    console.log("event", letter);

    card.style.setProperty("--mouseX", `${x}px`);
    card.style.setProperty("--mouseY", `${y}px`);
    card.style.setProperty("--bgColor", LETTER_COLOR[letter]);
  });
});
