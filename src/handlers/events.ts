import fs from "fs";
import { Client } from "discord.js";
import { logger } from "console-wizard";


const registerevents = async (client: Client): Promise<void> => {
  const events = fs.readdirSync(`./src/events`);
  events.forEach(async (ev: string) => {
    const event = (await import(`../events/${ev}`)).default;
    if (!event?.event || !event?.run)
      return logger.error(
        `${ev} either doesn't have run or doesn't have a name so fuck off`
      );
    client.on(event.event, (...args) => event.run(...args, client));
  });
  logger.success(`loaded ${events.length} events! (they all useless)`);
};

export default registerevents;
