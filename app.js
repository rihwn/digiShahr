let play = document.querySelector("img.play");
let video = document.querySelector(".video video");
let img = document.querySelector(".cover");
let span = document.querySelector(".video span");
play.addEventListener("click", () => {
  video.style.display = "block";
  img.style.display = "none";
  play.style.display = "none";
  span.style.display = "none";
});
const input = document.querySelector("input[type='range']");
const label = document.querySelector("#loan");

input.addEventListener("input", event => {
  const value = Number(input.value) / 100;
  input.style.setProperty("--thumb-rotate", `${value * 720}deg`);
  label.innerHTML = Math.round(value * 50);
});
