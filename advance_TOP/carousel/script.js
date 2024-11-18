document.addEventListener("click", (e) => {
  if (!e.target.matches(".carousel button")) {
    return;
  }
  let offset = e.target.id === "prev" ? -1 : 1;
  let current = document.querySelector(".carousel .slide.active");
  let Images = Array.from(document.querySelectorAll(".carousel .slide"));
  let index = Images.indexOf(current);
  let next = index + offset;
  if (next < 0) next = Images.length - 1;
  if (next >= Images.length) next = 0;

  current.classList.remove("active");
  Images[next].classList.add("active");
});

// 定时轮播
let autoSlideInterval = setInterval(() => {
  let current = document.querySelector(".carousel .slide.active");
  let Images = Array.from(document.querySelectorAll(".carousel .slide"));
  let index = Images.indexOf(current);
  let next = index + 1;
  if (next >= Images.length) next = 0;

  current.classList.remove("active");
  Images[next].classList.add("active");
}, 3000); // 每3秒自动切换一张图片

// 可选：如果想要暂停自动轮播，比如当用户点击了prev或next按钮，可以清除定时器
document.addEventListener("click", (e) => {
  if (e.target.matches(".carousel button")) {
    clearInterval(autoSlideInterval); // 停止自动轮播
    autoSlideInterval = setInterval(() => {
      // 重启定时器
      let current = document.querySelector(".carousel .slide.active");
      let Images = Array.from(document.querySelectorAll(".carousel .slide"));
      let index = Images.indexOf(current);
      let next = index + 1;
      if (next >= Images.length) next = 0;

      current.classList.remove("active");
      Images[next].classList.add("active");
    }, 3000);
  }
});
