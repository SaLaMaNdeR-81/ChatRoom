const express = require('express');
const router = express.Router();

const Config = require("../Config.json")

const MessagesModule = require('../Module/MessagesModule')

// =============================================

const Messages = new MessagesModule()

// =============================================



// =============             =============
//              =============
//               Get Messages
//              =============
// =============             =============

router.post('/get-messages', (req, res) => {

    res.json(Messages.CheckMessages())

})

// =============             =============
//              =============
//               New Messages
//              =============
// =============             =============

router.post('/new-messages', (req, res) => {

    const { username, message } = req.body

    if (!username || !message) {
        return res.status(200).json({ message: "Undefinde Username Or Message" })
    }

    Messages.AddNewMessage(username, message)
    res.json({ message: "Message Sended" })

})

// =============================================

module.exports = router;