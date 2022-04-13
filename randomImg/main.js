const img_arr = ["img_1", "img_2", "img_3", "img_4"];
const img_main = document.getElementById("img_main");
const img_pass = "img/";
const jpg_pass = ".jpg";

const randomImg = () => {
  let randomNumber = Math.floor(Math.random() * img_arr.length);
  img_main.src = img_pass + img_arr[randomNumber] + jpg_pass;
};

window.onload = randomImg;
setInterval(randomImg, 2000);
