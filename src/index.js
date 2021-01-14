const express = require("express")
const path = require("path")
const app = express()



const port = process.env.PORT || 3002
const pucblicDirectory = path.join(__dirname,"../public")
app.use(express.static(pucblicDirectory))



app.listen(port, () => {
    console.log("The app is running on port " + port + "!")
})