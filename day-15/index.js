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

const startSequency = data.split(",").map(x => Number(x))

/* PART 1 */
function logSpokenNumberAtPosition(position) {
	let spokenNumbers = startSequency
	for (let i = startSequency.length + 1; i <= position; i++) {
		const reverseSpokenNumbers = spokenNumbers.slice().reverse()
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
		if (i === position) console.log("result: ", spokenNumbers.slice().reverse()[0])
	}
}
logSpokenNumberAtPosition(2020)

/* PART 2 */
// logSpokenNumberAtPosition(30000000)
