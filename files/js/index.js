console.log("✨")

// the dog with the butter on him
function butterDog() {
	let chance = Math.floor(Math.random() * (5 - 1) + 1)
	console.log("Butter dog chance: " + chance + " (1)")

	if (chance == 1) {
		window.location.href = "./butterdog.html"
	}
}
