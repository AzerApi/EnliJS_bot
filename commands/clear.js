const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply("Sorry you can't run this command");
   if(!args[0]) return message.reply("use a number other than 0");

   if(Number.isInteger(parseInt(args[0]))){

    var amount = parseInt(args[0]) + 1;

    message.channel.bulkDelete(amount).then(() =>{
        if(args[0] <= 0){
            message.reply("Yeah bud sorry to tell ya, i can't delete 0 messages").then(msg => msg.delete({timeout: 3000}));
        }else if(args[0] ==1){
            message.reply("i've deleted 1 item").then(msg => msg.delete({timeout: 3000}));
        }else{
            message.reply(`i've deleted ${args[0]} messages `).then(msg => msg.delete({timeout: 3000}));
        }

    })

   }else{
       return message.reply("Give us an number not an piece of text")
   }

}

module.exports.help = {
    name: "clear"

}