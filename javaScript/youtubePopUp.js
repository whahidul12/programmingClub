// script.js

document.getElementById("openVideoBtn").addEventListener("click", function () {
  const videoModal = document.getElementById("videoModal");
  const youtubeVideo = document.getElementById("youtubeVideo");

  videoModal.style.display = "flex";
  youtubeVideo.src =
    "https://www.youtube.com/embed/IZtJNyuN2ZY?si=B7cs36F7M96zf34n"; // Replace 'YOUR_VIDEO_ID' with the actual ID of your video
});

document.querySelector(".close").addEventListener("click", function () {
  const videoModal = document.getElementById("videoModal");
  const youtubeVideo = document.getElementById("youtubeVideo");

  videoModal.style.display = "none";
  youtubeVideo.src = ""; // Stop video playback by removing the src
});

window.addEventListener("click", function (event) {
  const videoModal = document.getElementById("videoModal");
  const youtubeVideo = document.getElementById("youtubeVideo");

  if (event.target == videoModal) {
    videoModal.style.display = "none";
    youtubeVideo.src = ""; // Stop video playback by removing the src
  }
});
