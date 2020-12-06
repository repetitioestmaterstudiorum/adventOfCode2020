const fs = require("fs")

const actualDataPath = `${process.cwd()}/day-6/actual.txt`
const sampleDataPath = `${process.cwd()}/day-6/sample.txt`

function readFilePathSync(filePath) {
	try {
		console.log(`Reading ${filePath}`)
		const buffer = fs.readFileSync(filePath)
		const contents = buffer.toString()
		if (!contents) console.log("File empty ...")
		return contents
	} catch (err) {
		console.error(err)
	}
}

const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)

const groups = data.split("\n\n") // group by double line break

// PART 1
const uniqueGroup = groups.map(group => {
	return group
		.replace(/\n/g, "") // ignore line breaks in each group
		.split("") // make an array
		.filter((x, i, arr) => arr.indexOf(x) === i) // include if first instance of x
		.join("") // make a string again
})
// Set would be an idea as well -> all values are unique there

console.log("sol. part. 1: ", uniqueGroup.join("").length)

// PART 2
const subGroups = groups.map(x => x.split("\n"))

const p2 = subGroups
	.map(subGroup => {
		subGroupUniqueLetters = subGroup
			.join("")
			.split("")
			.filter((x, i, arr) => arr.indexOf(x) === i)
		return subGroupUniqueLetters.filter(x => subGroup.every(y => y.includes(x)))
	})
	.flat()

console.log("sol. part. 2:", p2.join("").length)
