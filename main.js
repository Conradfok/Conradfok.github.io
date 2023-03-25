var flipflop = true;
var x = 500;
var gameover = false;
var timer = 500;
var timermax = 500;
var border = 400;
var gamestart = true;
var awake = false;
setTimeout(() => {
	awake = true;
}, 18000);
    	
//Character controls are a and d    	
 var keys = [];  
(function update() {
	if (gameover) {
		console.log("Game over");
		document.getElementById("Hair").style.visibility = "hidden";
		document.getElementById("Kid").style.visibility = "hidden";
		document.getElementById("Eliana").style.visibility = "hidden";
		document.getElementById("Tree").style.visibility = "hidden";
		document.getElementById("GO").style.visibility = "visible";
	}   
	else {
		if (awake) {
		if (flipflop) {
			document.getElementById("Hair").style.visibility = "hidden";
			document.getElementById("Eliana").style.visibility = "visible";

		}
		else {
			document.getElementById("Hair").style.visibility = "visible";
			document.getElementById("Eliana").style.visibility = "hidden";

		}
	}
	console.log(gamestart);

	  // check keys

	  // left arrow
	  if (keys[37] ) {
	      x = x -1;
	      console.log("left");
	  }
	  // right arrow 
	  if (keys[39] ) {
	      x = x +1;
	      console.log("right");
	  }
	  //player physics
	  timer = timer - 1;
	  if (timer < 0) {
	  	timer = timermax;
	  	flipflop = !flipflop;
	  	if (gamestart) {
	  		gamestart = false

	  	}
	  	else{
			if (flipflop) {
				if (x < border) {
					gameover = true;
				}
			}
			else {
				if (x > border) {
					gameover = true;
				}
			}

		}
	  }
	  document.getElementById("Kid").style.left = x + "px";
	  document.getElementById("debug").innerHTML = ""+ timer;
	  document.getElementById("debug2").innerHTML = ""+ (x-border);
	}
  setTimeout(update, 1000 / 60);
}());

document.onkeydown = document.onkeyup = function(e) {
  keys[e.keyCode] = e.type === "keydown";
};
