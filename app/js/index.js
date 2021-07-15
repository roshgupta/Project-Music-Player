//JS FOR DROP DOWN QUEUE MENU
let queue = document.querySelector(".queue_display");
queue.addEventListener("click", function () {
  let menu = document.querySelector(".menu");
  if (menu.classList.contains("dn")) {
    queue.lastElementChild.style.transform = "rotate(180deg)";
    menu.classList.remove("dn");
  } else {
    queue.lastElementChild.style.transform = "rotate(0deg)";
    menu.classList.add("dn");
  }
});

//JS FOR LIKE SONG
let like = document.querySelectorAll(".like");
like.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.classList.contains("far")) {
      element.classList.add("fas");
      element.classList.remove("far");
    } else {
      element.classList.remove("fas");
      element.classList.add("far");
    }
  });
});

//JS FOR CAROUSEL
let carousel = document.querySelectorAll(".carousel-image");
setInterval(() => {
  carousel.forEach(function (carousel) {
    if (carousel.classList.contains("carousel-01")) {
      carousel.classList.add("carousel-02");
      carousel.classList.remove("carousel-01");
    } else if (carousel.classList.contains("carousel-02")) {
      carousel.classList.add("carousel-03");
      carousel.classList.remove("carousel-02");
    } else if (carousel.classList.contains("carousel-03")) {
      carousel.classList.add("carousel-04");
      carousel.classList.remove("carousel-03");
    } else if (carousel.classList.contains("carousel-04")) {
      carousel.classList.add("carousel-01");
      carousel.classList.remove("carousel-04");
    }
  });
}, 5000);

//JS FOR PLAYING SONG LIKE
let playingSongLike = document.querySelector(".playing-song-like");
playingSongLike.addEventListener("click", function () {
  if (playingSongLike.classList.contains("far")) {
    playingSongLike.classList.add("fas");
    playingSongLike.classList.remove("far");
  } else {
    playingSongLike.classList.add("far");
    playingSongLike.classList.remove("fas");
  }
});

//JS FOR INVALIDATE PLAYING SONG
let invalid = document.querySelector(".invalid");
invalid.addEventListener("click", function () {
  if (invalid.classList.contains("c")) {
    invalid.classList.remove("c");
    invalid.setAttribute("fill", "white");
  } else {
    invalid.classList.add("c");
    invalid.setAttribute("fill", "#717171");
  }
});
