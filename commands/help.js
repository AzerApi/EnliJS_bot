const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   try {

    var text = "**Enli Bot Js** \n\n **__Algemeen__** \n /hallo - Geeft een Hallo berichtje. \n /info -  geeft info over jouw gebruiker. \n /help - toon dit bericht \n\n **__Social media commands__** \n /social - toon de social media van @Azertoria#4849 \n\n **__Admin Commands__** \n /kick - Kicked een spelere \n /clear - maakt het scherm leeg tot een aangeven hoeveelheid \n /announce - maak een aankondiging \n\n **__Random commands__** \n /hentai - ??? \n /ahnung - ja ich habe keine ahnung ";
    message.author.send(text);

    message.reply("All commands can be found in your DM's / alle commands vind je in je dm's")
       
   } catch (error) {

    message.reply("a error came up")
       
   }

}

module.exports.help = {
    name: "help"

}