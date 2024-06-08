import Discord from "discord.js";
import fs from "fs";
import { logger } from "console-wizard";
class superclient extends Discord.Client {
  public commands: Discord.Collection<string, Command>;
  constructor() {
    super({ intents: ["Guilds", "GuildMessages", "MessageContent"] });
    this.commands = new Discord.Collection();
  }
}
const client = new superclient();

["events", "commands"].forEach(async (handler) =>
  (await import(`./handlers/${handler}`)).default(
    client,
    Discord,
    process.env.token
  )
);

fs.readdirSync(`./src/commands`).forEach(async (subfolder) => {
  const commandsfiles = fs
    .readdirSync(`./src/commands/${subfolder}`)
    .filter((file) => file.endsWith(`.ts`));
  for (const file of commandsfiles) {
    const slash = (await import(`./commands/${subfolder}/${file}`)).default;
    client.commands.set(slash.data.name, slash);
  }
});

logger.info("loaded commands");
client.login(process.env.token);
export default superclient;
