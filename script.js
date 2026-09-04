// show the cover first
document.querySelector("#cover").classList.add("active");

// open the scrapbook
function openGift() {
  document.querySelector("#cover").classList.remove("active");
  document.querySelector("#story").classList.add("active");
}

// move to another page
function nextPage(pageId) {

  // hide the current page
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  // show the selected page
  document.getElementById(pageId).classList.add("active");

}
