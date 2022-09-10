import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits } from "discord.js";

import { getResponse } from './utils/responseCases.js'

dotenv.config();

const PREFIX = '>';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ]
});

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length);    

    const reply = getResponse(args);
    message.channel.send(reply);
})
 
client.login(process.env.TOKEN);