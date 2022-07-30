let getHole = (index) => {
  for (index = 1; index < 10; index++) {
    const hole = document.getElementById(`hole${index}`);
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
   
    hole.onclick = function() {
      if (hole.className.includes("hole_has-mole")) {
        dead.textContent++;
        if (dead.textContent === "10") {
          alert("Вы выиграли!");
          dead.textContent = 0;
          lost.textContent = 0;
        }; 
      } else {
        lost.textContent++;  
        if (lost.textContent === "5") {
          alert("Вы проиграли!");
          dead.textContent = 0;
          lost.textContent = 0;
        };
      }   
    }
  }
}  
  getHole();
