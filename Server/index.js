const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');

const Config = require('./Config.json')
const Colors = require("./Module/Colors")

// ==========

const Router_Message = require('./Router/Messages')

// ==========

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

// ============================

app.use('/message', Router_Message)

// ==========

app.get('', (req, res) => {
    res.send(`Hello World`)
})

// ============================

app.listen(Config.ServerPort, () => {
    console.log(Colors.Cyan + ` Server Run at http://localhost:${Config.ServerPort} ` + Colors.Reset);
})
