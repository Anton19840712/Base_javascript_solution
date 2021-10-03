const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }]

const visits = new Map()

visits
	.set(users[0], new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
	.set(users[2], new Date(new Date().getTime() + 5000 * 60))

//console.log(visits)

function lastVisit(user) {
	return visits.get(user)
}

console.log(lastVisit(users[2]))
