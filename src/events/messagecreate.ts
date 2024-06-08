import Discord from 'discord.js';
//import { logger } from 'console-wizard';
const event = {
    event: 'messageCreate',
    async run(message: Discord.Message, client: Discord.Client) {
        if(message.content === "hi neon") {
            message.reply("hi jadebetty")
        }
        if(message.content === "!!ping") {
            const msg = await message.reply("ping pong cock sucker")
            const clientLatency = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`${client.ws.ping}ms for websocket\n${clientLatency}ms for client`)
        }
    }
}

export default event;