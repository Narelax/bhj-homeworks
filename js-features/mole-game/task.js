let getHole = (index) => {
  for (index = 1; index < 10; index++) {
    const hole = document.getElementById(`hole${index}`);
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
    //if (hole.className === "hole hole_has-mole") почему так просто нельзя
    if (hole.className.includes("hole_has-mole")) {
      hole.onclick = function() {
        if (dead.textContent === "10") {
          alert("Вы выиграли!")
          dead.textContent = 0;
        lost.textContent = 0;
        };
        
        return dead.textContent++;
      };
  } else {
      hole.onclick = function() {
        
        if (lost.textContent === "5") {
          alert("Вы проиграли!")
          dead.textContent = 0;
          lost.textContent = 0;
        }; 
        
        return lost.textContent++;
      };
     
    };
    
     
  }
  }


  
  
  getHole();

/*const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");*/