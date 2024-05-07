const eyeBalls = document.querySelectorAll(".eye");
const mainImage = document.querySelector(".main img");
const rekt = mainImage.getBoundingClientRect();
const verticalCenter = rekt.top + rekt.height / 2;
const horizontalCenter = rekt.left + rekt.width / 2;

function findAngle(cx, cy, ex, ey) {
  //find slope
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const slope = (ey - cy) / (ex - cx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

document.addEventListener("mousemove", (ev) => {
  const mouseX = ev.clientX;
  const mouseY = ev.clientY;

  const rotationAngle = findAngle(
    mouseX,
    mouseY,
    horizontalCenter,
    verticalCenter
  );
  console.log("angle", rotationAngle);
  eyeBalls.forEach((eyeBall) => {
    eyeBall.style.transform = `rotate(${rotationAngle}deg)`;
    mainImage.style.filter = `hue-rotate(${rotationAngle}deg)`;
  });
});
