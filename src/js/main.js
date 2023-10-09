/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("side-nav").style.width = "480px";
  //document.getElementById("main").style.marginLeft = "480px";
  //document.getElementById("side-nav").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  //document.getElementById("side-nav").style.width = "0%";
}

/* Returns the root directory of a page. */
function getRootDir() {
  let pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 2) {
    return pathSegments[1];
  } else {
    return '';
  }
}


function collapsableContainers() {
  let coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
