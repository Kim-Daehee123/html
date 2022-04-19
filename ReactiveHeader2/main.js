const toggleBtn = document.querySelector(".nav_toogleBtn");
const menu = document.querySelector(".nav_menu");
const icons = document.querySelector(".nav_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

window.addEventListener("resize", () => {
  let innerWidth = this.window.innerWidth;

  console.log(innerWidth);
  if (innerWidth > 768) {
    menu.classList.remove("active");
    icons.classList.remove("active");
  }
});

//슬라이드 초기값
let slideIndex = 1;
//시작시 실행되는 showSlides함수 slideIndex=1
showSlides(slideIndex);

//양 옆 화살표 온 클릭 함수
function plusSlides(n) {
  // n값에 slideIndex의 값을 더한 후 showSlides함수를 실행
  showSlides((slideIndex += n));
}

//버튼 클릭시 실행되는 함수
function currentSlide(n) {
  // n값에 slideIndex의 값을 대입한 후 showSlides함수를 실행
  showSlides((slideIndex = n));
}

//showSlides 실행 전달받은 n값
function showSlides(n) {
  let i;
  // 각 사진이 들어있는 div.mySlides 불러온다
  let slides = document.getElementsByClassName("mySlides");
  // 각 이미지에 대한 버튼 클래스를 불러온다
  let dots = document.getElementsByClassName("dot");

  // n이 전달받은 n의 값이 길이보다 크면(3) 1로 초기화 즉 다시 첫번째 사진 인덱스로 만든다
  if (n > slides.length) {
    slideIndex = 1;
  }
  // n이 1보다 작을 경우 mySlide 의 길이를 인덱스로 설정
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // 모든 사진을 none으로 처리
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // dot 클래스가 갖고있는 모든 active 클래스를 지운다 ("" 로 치환)
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex - 1] if문으로 처리받은 slideIndex값에 -1을 해 slides 의 클래스를 block으로 만든다
  slides[slideIndex - 1].style.display = "block";
  // 그에 맞는 dot 클래스를 가진 span 에 active 클래스를 추가한다
  dots[slideIndex - 1].className += " active";
}
