const body = document.querySelector("body");
body.addEventListener("mousemove", (event) => {
  const eye_sponge = document.querySelectorAll(".outer_sponge_eye");
  eye_sponge.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const angle = radian * (180 / Math.PI) * -1;
    eye.style.transform = `rotate(${angle}deg)`;
  });
});
body.addEventListener("mousemove", (event) => {
  const eye_patrick = document.querySelectorAll(".outer_patrick_eye");
  eye_patrick.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const angle = radian * (180 / Math.PI) * -1;
    eye.style.transform = `rotate(${angle}deg)`;
  });
});

var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
