import readFilePathSync from "../tools/index.js"

/* read actual or sample data */
const actualDataPath = `${process.cwd()}/day-15/actual.txt`
const sampleDataPath = `${process.cwd()}/day-15/sample.txt`

const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)

/* PART 1 */
function logSpokenNumberAtPosition(numberStr, position) {
	const start = Date.now()
	const startSequence = numberStr.split(",").map(x => Number(x))
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let lastNumber = startSequence[startSequence.length - 1]
	let spokenNumbers = startSequenceMinusLast
	for (let i = startSequence.length; i <= position; i++) {
		const lastInstanceOfLastNumber = spokenNumbers.lastIndexOf(lastNumber)
		spokenNumbers.push(lastNumber)
		if (i === position) return console.log("spoken number: ", spokenNumbers.pop())
		if (lastInstanceOfLastNumber === -1) {
			lastNumber = 0
		} else {
			lastNumber = spokenNumbers.length - 1 - lastInstanceOfLastNumber
		}
	}
}
function logSpokenNumberAtPositionRefactored(numberStr, position) {
	const startSequence = numberStr.split(",")
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let obj = {}
	startSequenceMinusLast.forEach((x, i) => (obj[x] = i + 1))
	let lastNumber = startSequence[startSequence.length - 1]
	for (let i = startSequence.length; i <= position; i++) {
		const lastInstanceOfLastNumber = obj[lastNumber]
		obj[lastNumber] = i
		if (i === position) return console.log("spoken number: ", lastNumber)
		if (lastInstanceOfLastNumber === undefined) {
			lastNumber = 0
		} else {
			lastNumber = i - lastInstanceOfLastNumber
		}
	}
}
console.time("logSpokenNumberAtPosition")
logSpokenNumberAtPosition(data, 2020)
console.timeEnd("logSpokenNumberAtPosition")

console.time("logSpokenNumberAtPositionRefactored")
logSpokenNumberAtPositionRefactored(data, 2020)
console.timeEnd("logSpokenNumberAtPositionRefactored")

/* PART 2 */
console.time("logSpokenNumberAtPositionRefactored")
// logSpokenNumberAtPositionRefactored(data, 30000000)
console.timeEnd("logSpokenNumberAtPositionRefactored")
