// Variables
var bulbThingy
var logo
var randomBtn
var mainText
var amyText
var codingText

var darkMode // for some reason doesn't work if it's let so yeah
let boomChance
let timesbulbpress = 0;

// Functions
window.onload = startFunction()

function startFunction() {

	// # SETTING VARIABLES	
	logo = document.getElementById("logo")
	bulbThingy = document.getElementById("bulbImg")
	randomBtn = document.getElementById("randomBtn")
	amyText = document.getElementById("amyText")
	codingText = document.getElementById("codingText")
	mainText = document.getElementById("second-mainText")

	// # DARK MODE STUF
	darkMode = sessionStorage.getItem('darkMode')

	if (darkMode == 'true') {
		document.body.classList.toggle("dark-theme")
		bulbThingy.src = "assets/art/lightBulb.gif"
	}

	// # RANDOM LOGO STUFF

	let funyGoloNumber = Math.floor(Math.random() * (25 - 1) + 1)
	
	console.log("Random chance of logo: " + funyGoloNumber)

	if (funyGoloNumber == 1) {
		logo.src = 'assets/art/funyAmulogo.gif'
	}
	
	else {
		logo.src = 'assets/art/amulogo.gif'
	}

	// # DUCK STUFF
	let duckChance = Math.floor(Math.random() * (45 - 1) + 1)
	// let duckChance = 1

	console.log("Duck chance: " + duckChance)

	if (duckChance == 1) {
		mainText.innerHTML = "Duck"
		mainText.setAttribute('id',"duck")

		document.getElementById("soYeah").remove()

		mainText.onclick = function() {
			location.replace("assets/duck.html")
		}
	}
}

function PlayAudio(audioURL) {
	var audio = new Audio(audioURL);
	audio.play();
}

window.addEventListener('mouseover', function() {
	amyText.style.cursor = 'pointer'
})

// On click events
bulbThingy.onclick = function() {
	timesbulbpress++
	
	console.log("Times the lightbulb was pressed " + timesbulbpress)

	if (timesbulbpress <= 15) {
		document.body.classList.toggle("dark-theme")

		if (document.body.classList.contains("dark-theme")) {
			PlayAudio("assets/audio/bulb/lightbulb_off.mp3")
			bulbThingy.src = "assets/art/lightBulb.gif"
			sessionStorage.setItem("darkMode", true)
		}

		else {
			PlayAudio("assets/audio/bulb/lightbulb_on.mp3")
			bulbThingy.src = "assets/art/darkBulb.gif"
			sessionStorage.setItem("darkMode", false)
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

logo.onclick = function() {
	PlayAudio("assets/audio/splash_sfx.mp3")

	logo.classList.add("logoAnimClass")
	
	setTimeout(function(){
		logo.classList.remove("logoAnimClass")		
	}, 560);
}

randomBtn.onclick = function() {
	let randomNum = Math.floor(Math.random() * (5 - 1) + 1)
	console.log("Index of random social media: " + randomNum)

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

amyText.onclick = function() {
	PlayAudio("assets/audio/vineboom.mp3")
}

// #region someCode

// # will use this code some day, i don't want to delete it because then i will forget #

// # I should replace this in css
// codingText.addEventListener('mouseover', function() {
// 	codingText.style.cursor = 'help'
// })

// this stays
// codingText.onclick = function() {
// console.log("lol")
// }

// amyText.addEventListener('mouseover', function() {
// 	boomChance = Math.floor(Math.random() * (10 - 1) + 1)
// 	console.log("Chance of boom sound effect: " + boomChance)

// 	if (boomChance == 1) {
// 		amyText.style.cursor = 'pointer'
// 	}

// 	else {
// 		amyText.style.cursor = 'help'
// 	}
// });

// amyText.onclick = function() {
// 	if (boomChance == 1) {
// 		PlayAudio("assets/audio/vineboom.mp3")
// 	} 

// 	else {
// 		console.log("lol")
// 	}
// }

// #endregion