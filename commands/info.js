const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Jouw Informatie:")
            .setColor("028ddd")
            .addFields(
                {name: "Jouw Naam:", value: message.member.displayName},
                {name: "je bent gejoined op:", value: message.member.joinedAt}
            )
            .setFooter("Enli Js discord bot")

        return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "info"

}