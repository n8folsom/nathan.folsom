// Viewport dimensions
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
window.onresize = function() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  //console.log(w,h);
}

// Colors
var colors=["#E6EED6","#F7EF99","#FAF3DD","#F5F1ED","#F3E9D2"]

// Windows
var city=document.querySelectorAll("svg *");
for (var i=0;i<city.length;i++) {
  var delay = Math.pow(Math.ceil(Math.random()*city.length),.2)-1;
  var windows = city[i];
  if (windows.style.fill == "rgb(255, 255, 255)") {
    windows.className.baseVal = "cell";
    var randomColor=colors[Math.floor(Math.random()*5)];
    windows.style.fill=randomColor;
    windows.style.animationDelay= delay +"s";
  }
}

var reload = function() {
  location.reload();
}
window.onload = function() {
  var city=document.getElementById('city');
  city.style.transform="translateY(-260px)";
}
