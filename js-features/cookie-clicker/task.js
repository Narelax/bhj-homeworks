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
    cookie.width = 250;
  }
  /*if (cookie.width === 250) {
    cookie.width = 200;
  }*/
  
};
cookie.onclick = changeSizes;