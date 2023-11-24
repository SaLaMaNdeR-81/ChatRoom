const fs = require('fs')
const path = require('path')

class MessagesModule {

    FILEPATH = path.join(__dirname, "../Messages.txt")

    CheckMessages() {

        let data = fs.readFileSync(this.FILEPATH, 'utf8');
        data = data.split('\n')

        return data

    }

    AddNewMessage(Username, Message) {

        // const date = Math.floor(new Date().getTime() / 1000)
        const date = new Date().getTime()

        const MessageFormat = `${Username}:${date}:${Message}`

        fs.appendFile(this.FILEPATH, `\n${MessageFormat}`, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return "We Have a some Problem"
            } else {
                return "Message appended successfully."
            }
        });

    }

}

module.exports = MessagesModule;