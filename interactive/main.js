(() => {
  // function action1_true(index) {
  //   document.querySelector(`[data-index="${index}"] .bird`).style.transition =
  //     "1.5s 0.5s linear";
  //   document.querySelector(
  //     `[data-index="${index}"] .bird`
  //   ).style.transform = `translateX(${window.innerWidth}px)`;
  // }

  // function action2_true(index) {
  //   document.querySelector(`[data-index="${index}"] .bird`).style.transition =
  //     "1.5s 0.5s linear";
  //   document.querySelector(
  //     `[data-index="${index}"] .bird`
  //   ).style.transform = `translate(${window.innerWidth}px, ${
  //     -window.innerHeight * 0.7
  //   }px)`;
  // }

  function action_true(index) {
    if (index === 2) {
      document.querySelector(`[data-index="${index}"] .bird`).style.transition =
        "1.5s 0.5s linear";
      document.querySelector(
        `[data-index="${index}"] .bird`
      ).style.transform = `translateX(${window.innerWidth}px)`;
    } else if (index === 5) {
      document.querySelector(`[data-index="${index}"] .bird`).style.transition =
        "1.5s 0.5s linear";
      document.querySelector(
        `[data-index="${index}"] .bird`
      ).style.transform = `translate(${window.innerWidth}px, ${
        -window.innerHeight * 0.7
      }px)`;
    } else {
      console.log("index가 일치하지 않습니다.");
    }
  }

  function action_false(index) {
    document.querySelector(`[data-index="${index}"] .bird`).style.transition =
      "0.01s 0s linear";
    document.querySelector(
      `[data-index="${index}"] .bird`
    ).style.transform = `translateX(-100%)`;
  }

  // function action2_false() {
  //   document.querySelector('[data-index="5"] .bird').style.transition =
  //     "0.01s 0s linear";
  //   document.querySelector(
  //     '[data-index="5"] .bird'
  //   ).style.transform = `translateX(-100%)`;
  // }

  const actions = {
    birdFlies(key) {
      let index = 2;
      if (key) {
        action_true(index);
      } else {
        action_false(index);
      }
    },
    birdFlies2(key) {
      let index = 5;
      if (key) {
        action_true(index);
      } else {
        action_false(index);
      }
    },
  };

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  //현재 활성화된(visible 클래스가 붙은) .grapic-item을 지정
  let currentItem = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute("data-index", i);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  //이미지 활성화
  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action](true);
    }
  }

  //이미지 비활성화
  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate(currentItem.dataset.action);
        currentItem = graphicElems[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  });

  window.addEventListener("load", () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });

  activate();
})();
