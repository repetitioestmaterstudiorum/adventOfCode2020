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
// console.log(JSON.stringify(data, null, 2)) // see "real values -> not transformed by the Terminal"
// console.log(data)
const groups = data.split("\n\n") // group by double line break
// console.log(groups)

const uniqueGroup = groups.map(group => {
	return group
		.replace(/\n/g, "") // ignore line breaks in each group
		.split("")
		.filter((item, i, arr) => arr.indexOf(item) === i)
		.join("")
})
// console.log("uniqueGroupe", uniqueGroup)

const totalCount = uniqueGroup.join("").length
console.log("total count: ", totalCount)
