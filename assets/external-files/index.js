window.onload = startFunction()

let funnySpin;

function startFunction() {
	let goloElement = document.getElementById("golo");
	
	let funyGoloNumber = Math.floor(Math.random() * (25 - 1) + 1)
	
	console.log(funyGoloNumber)

	if (funyGoloNumber == 1) {
		goloElement.src = 'assets/funyAmulogo.gif'
		funnySpin = true;
	}
	
	else {
		goloElement.src = 'assets/amulogo.gif'
	}

}

function onPfpClick() {
	
	let goloElement = document.getElementById("golo");
	
	if (funnySpin == true) {
		goloElement.src = 'assets/amulogo.gif'
	}

	else {
		let randomNum = Math.floor(Math.random() * (6 - 1) + 1)
		console.log(randomNum)
	
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
			funnySpin = true;
			goloElement.src = 'assets/funyAmulogo.gif'
			break;
			
			case 6:
			window.open("https://github.com/amySpark-ng/amySpark-ng.github.io", "_blank");
			break;
		}
	}

}

