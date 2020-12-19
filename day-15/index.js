import readFilePathSync from "../tools/index.js"

/* read actual or sample data */
const actualDataPath = `${process.cwd()}/day-15/actual.txt`
const sampleDataPath = `${process.cwd()}/day-15/sample.txt`

const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)

/* parts 1 and 2 use the same logic - here are 3 versions, using Array, Object, Map */
function logSpokenNumberAtPosition_Array(numberStr, position) {
	const startSequence = numberStr.split(",").map(x => Number(x))
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let lastNumber = startSequence[startSequence.length - 1]
	let spokenNumbers = startSequenceMinusLast
	for (let i = startSequence.length; i < position; i++) {
		const lastInstanceOfLastNumber = spokenNumbers.lastIndexOf(lastNumber)
		spokenNumbers.push(lastNumber)
		if (lastInstanceOfLastNumber === -1) {
			lastNumber = 0
		} else {
			lastNumber = spokenNumbers.length - 1 - lastInstanceOfLastNumber
		}
	}
	console.log(`spoken number at position ${position}: ${lastNumber}`)
}

function logSpokenNumberAtPosition_Object(numberStr, position) {
	const startSequence = numberStr.split(",")
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let obj = {}
	startSequenceMinusLast.forEach((x, i) => (obj[x] = i + 1))
	let lastNumber = startSequence[startSequence.length - 1]
	for (let i = startSequence.length; i < position; i++) {
		const lastInstanceOfLastNumber = obj[lastNumber]
		obj[lastNumber] = i
		if (lastInstanceOfLastNumber === undefined) {
			lastNumber = 0
		} else {
			lastNumber = i - lastInstanceOfLastNumber
		}
	}
	console.log(`spoken number at position ${position}: ${lastNumber}`)
}

function logSpokenNumberAtPosition_Map(numberStr, position) {
	const startSequence = numberStr.split(",").map(x => Number(x))
	const startSequenceMinusLast = startSequence.slice(0, startSequence.length - 1)
	let map = new Map()
	startSequenceMinusLast.forEach((x, i) => map.set(x, i + 1))
	let lastNumber = startSequence[startSequence.length - 1]
	for (let i = startSequence.length; i < position; i++) {
		const lastInstanceOfLastNumber = map.get(lastNumber)
		map.set(lastNumber, i)
		if (lastInstanceOfLastNumber === undefined) {
			lastNumber = 0
		} else {
			lastNumber = i - lastInstanceOfLastNumber
		}
	}
	console.log(`spoken number at position ${position}: ${lastNumber}`)
}

/* PART 1 */
console.time("exec time for logSpokenNumberAtPosition_Array")
logSpokenNumberAtPosition_Array(data, 2020)
console.timeEnd("exec time for logSpokenNumberAtPosition_Array")

console.time("exec time for logSpokenNumberAtPosition_Object")
logSpokenNumberAtPosition_Object(data, 2020)
console.timeEnd("exec time for logSpokenNumberAtPosition_Object")

console.time("exec time for logSpokenNumberAtPosition_Map")
logSpokenNumberAtPosition_Map(data, 2020)
console.timeEnd("exec time for logSpokenNumberAtPosition_Map")

/* PART 2 */
console.time("exec time for logSpokenNumberAtPosition_Map")
logSpokenNumberAtPosition_Map(data, 30000000)
console.timeEnd("exec time for logSpokenNumberAtPosition_Map")
// takes about 6s on a MacBook Pro 2018
// the object version took about 11min!

/* running 30 billion repetitions on the object/array
solutions takes too long. To illustrate: */
// 100 000 with an array on above-mentioned hardware: 3.3s
// console.time("exec time for logSpokenNumberAtPosition_Array")
// logSpokenNumberAtPosition_Array(data, 100000)
// console.timeEnd("exec time for logSpokenNumberAtPosition_Array")
// // 1 000 000 with an object: 1.8s
// console.time("exec time for logSpokenNumberAtPosition_Object")
// logSpokenNumberAtPosition_Object(data, 1000000)
// console.timeEnd("exec time for logSpokenNumberAtPosition_Object")
// // same (1 000 000) with a map: 0.072s
// console.time("exec time for logSpokenNumberAtPosition_Map")
// logSpokenNumberAtPosition_Map(data, 1000000)
// console.timeEnd("exec time for logSpokenNumberAtPosition_Map")
