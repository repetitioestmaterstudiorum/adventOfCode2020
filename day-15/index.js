/* read actual or sample data */
const fs = require("fs")

const actualDataPath = `${process.cwd()}/day-15/actual.txt`
const sampleDataPath = `${process.cwd()}/day-15/sample.txt`

function readFilePathSync(filePath) {
	try {
		console.log(`Reading ${filePath}`)
		const buffer = fs.readFileSync(filePath)
		const contents = buffer.toString()
		if (!contents) console.log("File empty ...")
		return contents
	} catch (err) {
		console.error(err.message)
	}
}

const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)

// a separator to organize the console output
function logSeparator() {
	console.log("***********")
}
logSeparator()

/* PART 1 */
const max = 2020
const startSequency = data.split(",").map(x => Number(x))

let spokenNumbers = startSequency
for (let i = startSequency.length + 1; i <= max; i++) {
	const reverseSpokenNumbers = [...spokenNumbers].reverse()
	// last number in sequence
	const latestNumber = reverseSpokenNumbers[0]
	// find last instance of number
	const lastInstance = reverseSpokenNumbers.slice(1).indexOf(latestNumber)
	// if number not occurred yet, add 0, else find distance and add it
	if (lastInstance === -1) {
		spokenNumbers.push(0)
	} else {
		spokenNumbers.push(lastInstance + 1)
	}
	if (i === max) console.log("result: ", [...spokenNumbers].reverse()[0])
}
