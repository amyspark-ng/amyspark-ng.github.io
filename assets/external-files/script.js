window.onload = startFunction()

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

	var darkThemeButton = document.getElementById("bulbImg")
	darkThemeButton.onclick = function() {
		document.body.classList.toggle("dark-theme")

		if (document.body.classList.contains("dark-theme")) {
			PlayAudio("assets/audio/lightbulb_off.mp3")
			darkThemeButton.src = "assets/art/lightBulb.gif"
		}

		else {
			PlayAudio("assets/audio/lightbulb_on.mp3")
			darkThemeButton.src = "assets/art/darkBulb.gif"
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
}

function PlayAudio(audioURL) {
	var audio = new Audio(audioURL);
	audio.play();
}
