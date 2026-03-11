export default function handler(req, res) {

const { number } = req.query

if (!number) {
return res.status(400).json({
error: "Number required"
})
}

function generateCode() {
const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
let code = ""

for (let i = 0; i < 8; i++) {
code += chars.charAt(Math.floor(Math.random() * chars.length))
}

return code
}

const pairCode = generateCode()

res.status(200).json({
code: pairCode
})

}
