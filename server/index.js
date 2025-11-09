const TelegramBot = require('node-telegram-bot-api')
const token = "8509552834:AAHWe_1ErzS1AQCRxlonI162W9RLfxUwKuU"

const bot = new TelegramBot(token, { polling: true })

const bootstrap = () => {
    bot.on("message", async msg => {
        const chatId = msg.chat.id
        const text = msg.text

        if (text == "/start") {
            await bot.sendMessage(
                chatId, 
                "Diyorbek.ac platformasida bor kurslarni sotib olishingiz mumkin",
                {
                  reply_markup:{
                    keyboard:[
                        [
                            {
                                text:"Kurslarni ko'rish",
                                web_app:{
                                    url:'https://Diyorbek.ac',
                                }
                            }
                        ]
                    ]
                  }

                  
                }
            )
        }
    })
}

bootstrap()
