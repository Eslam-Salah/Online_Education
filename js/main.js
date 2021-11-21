// For Header
let headerBtn = document.querySelector(".bars i");
let nav_bar = document.querySelector("header .navbar");

headerBtn.addEventListener("click", () => {
  nav_bar.classList.toggle("active");
  headerBtn.classList.toggle("fa-times");
});

window.addEventListener("scroll", () => {
  nav_bar.classList.remove("active");
  headerBtn.classList.remove("fa-times");
});

// For Video Popup
let video_popup = document.querySelector(".video_popup");
let close_popup = document.getElementById("close_vid");

document.querySelectorAll(".course_03 .box_video video").forEach((vid) => {
  vid.addEventListener("click", () => {
    let src = vid.getAttribute("src");
    video_popup.classList.add("active");
    video_popup.querySelector("video").src = src;
  });
});

close_popup.addEventListener("click", () => {
  video_popup.classList.remove("active");
});
