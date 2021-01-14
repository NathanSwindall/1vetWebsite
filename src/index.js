require('./db/mongoose')
const path = require('path')
const express = require('express')
const cors = require('cors')
const Test = require('./models/test')
const multer = require('multer')
const upload = multer()
const WYT = require("./models/wyt")






const app = express()
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json())

const pucblicDirectory = path.join(__dirname,"../public")
app.use(express.static(pucblicDirectory))

let cpUpload = upload.fields([{ name: 'feedback-form-name', maxCount: 1 } ])





app.post("/wyt_post",upload.none(), async(req,res) => {
  try {
    const test = new Test({"description": "stuff", "Things": "thing"})
    console.log(req.body)
    const wyt = new WYT(req.body)
    console.log(wyt)

    await wyt.save()
    //console.log(req.body["feedback-form-botcheck"])
   // console.log(req.body["feedback-form-date-of-visit"])
    // app.get("/testing", async (req,res) => {

    // })
    //await test.save()
    res.send(req.body)
  } catch (e) {
    console.log(e)
    res.status(404).send(e)
  }
})



app.listen(port, () => {
    console.log('Nathans Server is up on port ' + port)
})


