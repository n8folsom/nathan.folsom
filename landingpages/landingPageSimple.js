// Viewport dimensions
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Container dimensions
var height=h;
var width=w;

// Create container element
var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.height = height+"px";
container.style.width = width+"px";

// Cell dimensions
var numColumns=10;
var borderWidth=1;
var squareDim=width/numColumns-2*borderWidth;
var numRows=Math.ceil(height/(squareDim+2*borderWidth));

// Create Cells
for (var i=0;i<numRows*numColumns;i++) {
  newDiv=document.createElement("div");
  newDiv.className="cell";
  var delay = Math.ceil(Math.random()*numColumns*numRows)/150;
  newDiv.style.animationDelay= delay +"s";
  newDiv.style.width=squareDim+"px";
  newDiv.style.height=squareDim+"px";
  newDiv.style.borderWidth=borderWidth+"px";
  document.body.getElementsByClassName('container')[0].appendChild(newDiv);
}
window.onresize = function() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var height=h;
  var width=w;
  container.style.height = height+"px";
  container.style.width = width+"px"
  var squareDim=width/numColumns-2*borderWidth;
  var numRows=Math.ceil(height/(squareDim+2*borderWidth));
  var cellsResponsive=document.getElementsByClassName('cell');
  for (var i=0;i<cellsResponsive.length; i++) {
    cellsResponsive[i].style.width=squareDim+"px";
    cellsResponsive[i].style.height=squareDim+"px";
    if (numRows>(cellsResponsive.length/numColumns)){
      newDiv=document.createElement("div");
      newDiv.className="cell";
      newDiv.style.width=squareDim+"px";
      newDiv.style.height=squareDim+"px";
      newDiv.style.borderWidth=borderWidth+"px";
      newDiv.style.animationName="none";
      newDiv.style.opacity="1";
      newDiv.style.borderColor="white";
      document.body.getElementsByClassName('container')[0].appendChild(newDiv);
    }
  }
}
var reload = function() {
  location.reload();
}
window.onload = function() {
  var spans=document.querySelectorAll("#title span");
  for(var i=0;i<spans.length;i++) {
    spans[i].style.transitionDelay=(i+1)/3+numRows*numColumns/150+"s";
    spans[i].style.opacity=1;
  }
}
