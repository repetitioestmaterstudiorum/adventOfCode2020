import readFilePathSync from "../tools/index.js"

/* get the data */
const actualDataPath = `${process.cwd()}/day-1/actuall.txt`
const sampleDataPath = `${process.cwd()}/day-1/sample.txt`

const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)
const list = data.split(/\n/).map(x => Number(x))

// Part 1: two numbers summing to 2020
function logTwoNbs2020Sum() {
	for (let x of list) {
		for (let y of list) {
			if (x + y === 2020)
				return console.log("two numbers summing to 2020: ", x, y, "multiplied: ", x * y)
		}
	}
}
logTwoNbs2020Sum()

// Part 2: three numbers summing to 2020
function logThreeNbs2020Sum() {
	for (let x of list) {
		for (let y of list) {
			for (let z of list) {
				if (x + y + z === 2020)
					return console.log(
						"three numbers summing to 2020: ",
						x,
						y,
						z,
						"multiplied: ",
						x * y * z
					)
			}
		}
	}
}
logThreeNbs2020Sum()
