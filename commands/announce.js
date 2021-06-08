const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry you can't run this command");

    var seperator = "|";

    if (args[0] == null) {
        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("RED")
            .setDescription(`maak een announcement door gebruik te maken van: \n /announce titel ${seperator} bericht ${seperator} kleur ${seperator} Kanaal`)

        return message.reply(embed);
    }

    var argsList = args.join(" ").split(seperator);
    if (argsList[2] === undefined) argsList[2] == "#eeeeee"
    if (argsList[3] === undefined) argsList[3] == "general"

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "geen inhoud",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()



    }
    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(options.kleur)
        .setDescription(`bericht van ${message.author} \n ${options.titel} \n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if(!channel) return message.reply("dit kanaal bestaat niet");

    channel.send(announceEmbed);




}

module.exports.help = {
    name: "announce"

}