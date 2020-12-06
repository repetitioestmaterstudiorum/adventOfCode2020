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
console.log(data)
