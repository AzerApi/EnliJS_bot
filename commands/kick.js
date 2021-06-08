const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry you can't run this command");

        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No permission");

        if(!args[0]) return message.reply("No user specefied");

        if(!args[1]) return message.reply("No reason specefied");

        var kickUser = message.guild.member( message.mentions.users.first() || message.guild.members.get(args[1]));

        var kickReason = args.slice(2).join(" ");

        if(!kickUser) return message.reply("gebruiker niet gevonden");

        var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Gelieve Snel te reargeren")
        .setDescription(`Wil je ${kickUser} kicken?`);

        var embed = new discord.MessageEmbed()
        .setColor("ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**gekicked** ${kickUser} (${kickUser.id})
        **gekicked** door ${message.author}
        **Reason: ** ${kickReason}`);

        message.channel.send(embedPrompt).then(async msg =>{

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
            
            if(emoji === "✅"){
                msg.delete();

                kickUser.kick(kickReason).catch(error =>{
                    if(error) return message.reply("something went wrong")
                });
                
                message.channel.send(embed);

                
            }else if(emoji === "❌"){
                msg.delete();
                
                return mesagge.reply("Canceld the kick").then(m => m.delete(5000));

            }
        })

}
async function promptMessage(message, author, time, reactions){

    time *= 1000;

    for(const reaction of reactions){
        await message.react(reaction);
    }

    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    
    return message.awaitReactions(filter, {max:1, time: time}).then(collected => collected.first() && collected.first().emoji.name);


}

module.exports.help = {
    name: "kick"

}