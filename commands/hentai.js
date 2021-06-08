const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    var text = "Baka! geen hentai voor jouw Senpai"
    message.author.send(text);

    var user = message.member.displayName;
   return message.channel.send(`${user}su wa hentaidesu `);

   

}

module.exports.help = {
    name: "hentai"

}