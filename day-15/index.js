/* read actual or sample data */
const fs = require("fs")
const { start } = require("repl")

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

const startSequence = data.split(",").map(x => Number(x))
const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
let lastNumber = startSequence.pop()

/* PART 1 */
function logSpokenNumberAtPosition(position) {
	let spokenNumbers = startSequenceMinusLast
	for (let i = spokenNumbers.length + 1; i <= position; i++) {
		const lastInstanceOfLastNumber = spokenNumbers.lastIndexOf(lastNumber)
		spokenNumbers.push(lastNumber)
		if (lastInstanceOfLastNumber === -1) {
			lastNumber = 0
		} else {
			lastNumber = spokenNumbers.length - 1 - lastInstanceOfLastNumber
		}
		if (i === position) console.log("result: ", spokenNumbers.pop())
	}
}
logSpokenNumberAtPosition(2020)

/* PART 2 */
logSpokenNumberAtPosition(30000000)
