const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
Client.on("ready", () => {
    console.log("bot opérationnel")
});

Client.login("OTk1NzA3OTg2NTMyMTIyNzQ0.GNgiWO.EYfpxLAReShwXl9HUp7DyXrtaBIjVYPNZTkTPA");

const prefix = "!";
Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (message.content === "feur")
        message.reply("ouge");
    
    //!quoti
    if (message.content === prefix + "quoti"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0030ff")
            .setTitle("Les quetes que tu dois faire fdp")
            .setURL("https://discord.js.org/")
            .setAuthor("EN sah je suis BG");
        message.channel.send({embeds : [embed]});
        message.reply("1. va niquer tes morts \n 2. nique ton pere \n 3.nique ta soeur");
    }
});