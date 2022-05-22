/*const cookie = document.getElementById("cookie");
cookie.onclick = function() {
  if (cookie.width === "200") {
    cookie.width = 250;
  }
  if (cookie.width === "250") {
    cookie.width = 200;
  }
}*/
const cookie = document.getElementById("cookie");


function changeSizes() {
  if (cookie.width === 200) {
    return cookie.width = 250;
  }
  if (cookie.width === 250) {
    return cookie.width = 200;
  }
};

function clickCounter() {
  const counter = document.getElementById("clicker__counter");
  return counter.textContent++;
}
  
cookie.addEventListener("click", changeSizes);
cookie.addEventListener("click", clickCounter); 
//cookie.onclick = (clickCounter);