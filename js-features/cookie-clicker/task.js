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
