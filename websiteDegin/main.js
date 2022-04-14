const img_arr = ["cafe_late", "coffee", "life", "rest", "user"];
const img_pass = "images/";
const png_pass = ".png";
const img_main = document.getElementById("img_main");

const randomBackground = () => {
  let randomNumber = Math.floor(Math.random() * img_arr.length);
  img_main.src = img_pass + img_arr[randomNumber] + png_pass;
};

window.onload = randomBackground;
setInterval(randomBackground, 2000);
