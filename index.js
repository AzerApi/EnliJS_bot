const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");


const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) =>{

    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.lenght <= 0){
        console.log("geen files te vinden");
        return;
    }

    jsfiles.forEach((f, i) =>{

        var fileGet = require(`./commands/${f}`);

        console.log(`de file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);


    });

client.on("discord.GuildMemberAdd", member =>{

    var role = member.guild.roles.cache.get('847445119905038398');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('847445833988702248');

    if(!channel) return;

    channel.send(`welkom bij de server ${member}`);
});
    
});

client.login(botConfig.token);

client.on("ready", async () =>{

console.log(`${client.user.username} is online.`);
client.user.setActivity("Enli nu in js", {type: "LISTENING"})


});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");
    
    var command = messageArray[0];

    if(!message.content.startsWith(prefix)) return;

    var args =  messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, args)
});

