const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var text = "**Enli Bot Js** \n\n **__Onze Social media__** \n Github: github.com/jarivankaam \n Instagram: AzerJari \n snapchat: avalongaminghd \n Twitter: @KaamJari";
    message.author.send(text);

}

module.exports.help = {
    name: "social"

}