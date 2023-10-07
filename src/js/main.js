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

function getRootDir() {
  let pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 2) {
    return pathSegments[1];
  } else {
    return '';
  }
}
