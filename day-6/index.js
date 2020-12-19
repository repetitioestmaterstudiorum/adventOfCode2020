import readFilePathSync from "../tools/index.js"

/* get the data */
const actualDataPath = `${process.cwd()}/day-6/actual.txt`
const sampleDataPath = `${process.cwd()}/day-6/sample.txt`
const data = readFilePathSync(actualDataPath) || readFilePathSync(sampleDataPath)

const groups = data.split("\n\n") // group by double line break

// PART 1
const uniqueGroup = groups.map(group => [...new Set(group.replace(/\n/g, ""))]).flat().length
console.log("sol. part. 1:", uniqueGroup)

// PART 2
const subGroups = groups.map(x => x.split("\n"))
const p2 = subGroups
	.map(subGroup => {
		const subGroupUniqueLetters = [...new Set(subGroup.join(""))]
		return subGroupUniqueLetters.filter(x => subGroup.every(y => y.includes(x)))
	})
	.join("").length
console.log("sol. part. 2:", p2)
