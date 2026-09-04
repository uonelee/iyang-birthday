const giftButton = document.getElementById("giftButton");

document.querySelector("#cover").classList.add("active");

giftButton.addEventListener("click", function () {
  document.querySelector("#cover").classList.remove("active");
  document.querySelector("#story").classList.add("active");
});

function nextPage(pageId) {
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}
