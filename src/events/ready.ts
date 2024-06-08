import Discord from 'discord.js';
import { logger } from 'console-wizard';
const event = {
    event: 'ready',
    async run(client: Discord.Client) {
        logger.info(`Logged in as ${client.user?.tag}`);
    }
}

export default event;