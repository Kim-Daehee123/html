let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");
let HORIZONTAL_TARGET;
let VERTICAL_TARGET;

// html 최초 로드 및 이벤트 상시 대기 실시
window.onload = () => {
  document.getElementById("horizontal-default").click();
  document.getElementById("vertical-default").click();
};

// 실시간 브라우저 사이즈 변경 확인 및 상시 대기 실시
window.onresize = () => {
  HORIZONTAL_TARGET.click();
  VERTICAL_TARGET.click();
};

// horizontalMenus 클릭 이벤트
horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => {
    horizontalIndicator(e);
  })
);

//수평 메뉴 밑줄 위치
function horizontalIndicator(e) {
  if (e.currentTarget.id === "horizontal-default") {
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    HORIZONTAL_TARGET = e.currentTarget;
  } else {
    horizontalUnderline.style.transition = "0.5s";
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top =
      e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    HORIZONTAL_TARGET = e.currentTarget;
  }
}

// verticalMenus 클릭 이벤트
verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => {
    verticalIndicator(e);
  })
);

//수직 메뉴 밑줄 위치
function verticalIndicator(e) {
  verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
  verticalUnderline.style.display = "block";
  VERTICAL_TARGET = e.currentTarget;
}
