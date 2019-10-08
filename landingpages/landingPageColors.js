// Viewport dimensions
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Container dimensions
var width=w*.79;
var height=width*.5-20;

// Create container element
var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.height = height+"px";
container.style.width = width+"px";

// Cell dimensions
var numColumns=18;
var borderWidth=1;
var squareDim=width/numColumns-2*borderWidth;
var numRows=Math.ceil(height/(squareDim+borderWidth));

// Colors
var colors=["#D62839","#F45D01","#EEB902","#97CC04","#2D7DD2"]

// Create Cells
for (var i=0;i<numRows*numColumns;i++) {
  newDiv=document.createElement("div");
  newDiv.className="cell";
  var delay = Math.pow(Math.ceil(Math.random()*numColumns*numRows), 1.5)/1000;
  newDiv.style.animationDelay= delay +"s";
  newDiv.style.width=squareDim+"px";
  newDiv.style.height=squareDim+"px";
  newDiv.style.borderLeftWidth=borderWidth+"px";
  newDiv.style.borderBottomWidth=borderWidth+"px";
  var randomColor=colors[Math.floor(Math.random()*5)];
  newDiv.style.backgroundColor=randomColor;
  document.body.getElementsByClassName('container')[0].appendChild(newDiv);
}

window.onresize = function() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var width=w*.8;
  var height=width*.5;
  container.style.height = height+"px";
  container.style.width = width+"px"
  var squareDim=width/numColumns-2*borderWidth;
  var numRows=Math.ceil(height/(squareDim+2*borderWidth));
  var cellsResponsive=document.getElementsByClassName('cell');
  for (var i=0;i<cellsResponsive.length; i++) {
    cellsResponsive[i].style.width=squareDim+"px";
    cellsResponsive[i].style.height=squareDim+"px";
  }
}

var reload = function() {
  location.reload();
}
