let mainText = document.querySelector(".fav_prod_txt01");
let secondText = document.querySelector(".fav_prod_txt02");
let mainImg = document.querySelector(".photo");
let btn = document.querySelector(".btn_fav_prod");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;

  if (value > 300) {
    mainText.style.animation = "txt01_disAppear 1s ease-out forwards";
    secondText.style.animation = "txt02_disAppear 1s ease-out forwards";
    mainImg.style.animation = "imgDisAppear 1s ease-out forwards";
    btn.style.animation = "btn_disAppear 1s forwards";
  } else {
    mainText.style.animation = "txt01_slide 2s ease-out";
    secondText.style.animation = "txt02_slide 2s ease-out";
    mainImg.style.animation = "imgSlide 2s ease-out forwards";
    btn.style.animation = "btn_Appear 1s";
  }
});
