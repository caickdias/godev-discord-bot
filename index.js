require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const PREFIX = '>';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ]
});

client.on("ready", () => {
    client.user.setActivity("Hey!", { type: "WATCHING" })
});

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length);
    //console.log(args)    

    message.channel.send("Opa!")
})
 
client.login(process.env.TOKEN);