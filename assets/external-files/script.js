window.onload = startFunction()

// window.addEventListener("keydown", function (event) {
// 	// let repeat = event.repeat;
	
// 	if (event.defaultPrevented) {
// 	  return; // Do nothing if the event was already processed
// 	}

// 	if (event.ctrlKey && event.) {
// 		alert("oenqage")
// 	}

// });

var timesbulbpress = 0;

window.addEventListener('keydown', function(event) {
	console.log("keypressed")
	
	if (event.defaultPrevented) {
		return
	}

	if (event.ctrlKey) {
		console.log("stuff pressed ctrl very cool")
	}
	
	if (event.altKey) {
		console.log("ELKIN")
	}

	if (event.altKey) {
		// alert("ALT KEY HAS BEEN PRESSED")
	}

	else if (event.ctrlKey && event.key === "c") {
		alert("sus among us ")
	}

	// if (event.key === "a") {
	// 	console.log("a key was pressed")
	// }
	event.preventDefault();

});

function startFunction() {
	let goloElement = document.getElementById("golo");
	
	let funyGoloNumber = Math.floor(Math.random() * (25 - 1) + 1)
	
	console.log(funyGoloNumber)

	if (funyGoloNumber == 1) {
		goloElement.src = 'assets/art/funyAmulogo.gif'
	}
	
	else {
		goloElement.src = 'assets/art/amulogo.gif'
	}

	var bulbThingy = document.getElementById("bulbImg")
	bulbThingy.onclick = function() {
		timesbulbpress++
		
		console.log(timesbulbpress)

		if (timesbulbpress <= 15) {
			document.body.classList.toggle("dark-theme")
	
			if (document.body.classList.contains("dark-theme")) {
				PlayAudio("assets/audio/bulb/lightbulb_off.mp3")
				bulbThingy.src = "assets/art/lightBulb.gif"
			}
	
			else {
				PlayAudio("assets/audio/bulb/lightbulb_on.mp3")
				bulbThingy.src = "assets/art/darkBulb.gif"
			}
		}
		
		else {
			PlayAudio("assets/audio/bulb/lightbulb_buzzing.mp3")
		}

		if (timesbulbpress >= 18) {
			PlayAudio("assets/audio/bulb/lightbulb_shatter.mp3")
			bulbThingy.remove()
		}

	}

}

function onClick(elementClicked) {
	
	if (elementClicked == "PFP") {

		// let randomNum = Math.floor(Math.random() * (6 - 1) + 1)
		// console.log(randomNum)
	
		// switch(randomNum) {
		// 	case 1:
		// 	window.open("https://twitter.com/amyspark_ng", "_blank");
		// 	break;
			
		// 	case 2:
		// 	window.open("https://amychan-a.newgrounds.com", "_blank");
		// 	break;
			
		// 	case 3:
		// 	window.open("https://github.com/amySpark-ng", "_blank");
		// 	break;
			
		// 	case 4:
		// 	window.open("https://amyspark-ng.itch.io/", "_blank");
		// 	break;
			
		// 	case 5:
		// 	goloElement.src = 'assets/art/funyAmulogo.gif'
		// 	break;
			
		// 	case 6:
		// 	window.open("https://github.com/amySpark-ng/amySpark-ng.github.io", "_blank");
		// 	break;
		// }

		// ^ What originally used to happen, i have some new plans for it now tho so yeah in some time
	}

	else if (elementClicked == "LOGO") {
		PlayAudio("assets/audio/splash_sfx.mp3")
	}

	else if (elementClicked == "randomBtn") {
		let randomNum = Math.floor(Math.random() * (5 - 1) + 1)
		console.log("random button" + randomNum)
	
		switch(randomNum) {
			case 1:
			window.open("https://twitter.com/amyspark_ng", "_blank");
			break;
			
			case 2:
			window.open("https://amychan-a.newgrounds.com", "_blank");
			break;
			
			case 3:
			window.open("https://github.com/amySpark-ng", "_blank");
			break;
			
			case 4:
			window.open("https://amyspark-ng.itch.io/", "_blank");
			break;
						
			case 5:
			window.open("https://github.com/amySpark-ng/amySpark-ng.github.io", "_blank");
			break;
		}
	}
}

function PlayAudio(audioURL) {
	var audio = new Audio(audioURL);
	audio.play();
}
