function win(dst) {
  window.open(dst)
}
function goto(dst) {
    location.assign(dst);
}
function ResponsiveTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
