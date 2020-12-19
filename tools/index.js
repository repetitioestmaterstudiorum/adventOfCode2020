import fs from "fs"

export default function readFilePathSync(filePath) {
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
