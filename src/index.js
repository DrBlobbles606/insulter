const imessage = require('osa-imessage')
const fs = require("fs")
const insults = fs.readFileSync("static/insults.txt").toString().split("\n")
const args = process.argv
const numberOfInsults = args[3] ? parseInt(args[3]) : 1
const phoneNumber = args[2]

insultNumber(phoneNumber, numberOfInsults)

function insultNumber(num, numberOfInsults) {
	console.log('Sending', numberOfInsults, 'to', num)
	if (!phoneNumber) {
		console.log("Must specify phone number: insult <phone_number> <number_of_insults>")
		return
	}

	for (let _i = 0; _i < numberOfInsults; _i++) {
		const insult = insults[Math.floor(Math.random() * insults.length)]
		imessage.send(num, insult)
	}
}