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

/* PART 1 */
// function logSpokenNumberAtPosition(data, position) {
// 	const startSequence = data.split(",").map(x => Number(x))
// 	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
// 	let lastNumber = startSequence[startSequence.length - 1]
// 	let spokenNumbers = startSequenceMinusLast
// 	for (let i = startSequence.length; i <= position; i++) {
// 		console.log("i", i)
// 		console.log("lastNumber", lastNumber)
// 		console.log("spokenNumbers", spokenNumbers)
// 		const lastInstanceOfLastNumber = spokenNumbers.lastIndexOf(lastNumber)
// 		console.log("lastInstanceOfLastNumber", lastInstanceOfLastNumber)
// 		spokenNumbers.push(lastNumber)
// 		if (lastInstanceOfLastNumber === -1) {
// 			console.log("add: ", lastNumber)
// 			lastNumber = 0
// 		} else {
// 			console.log("add: ", spokenNumbers.length - 1 - lastInstanceOfLastNumber)
// 			lastNumber = spokenNumbers.length - 1 - lastInstanceOfLastNumber
// 		}
// 		if (i === position) console.log("result: ", spokenNumbers.pop())
// 	}
// }
function logSpokenNumberAtPosition(data, position) {
	const startSequence = data.split(",")
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let obj = {}
	startSequenceMinusLast.forEach((x, i) => (obj[x] = i + 1))
	let lastNumber = startSequence[startSequence.length - 1]
	for (let i = startSequence.length; i <= position; i++) {
		const lastInstanceOfLastNumber = obj[lastNumber]
		obj[lastNumber] = i
		if (i === position) return console.log("result: ", lastNumber)
		if (lastInstanceOfLastNumber === undefined) {
			lastNumber = 0
		} else {
			lastNumber = i - lastInstanceOfLastNumber
		}
	}
}
// logSpokenNumberAtPosition(data, 2020)

/* PART 2 */
// logSpokenNumberAtPosition(data, 30000000)
