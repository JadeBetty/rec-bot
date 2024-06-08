import fs from "fs";
import { Client, REST, Routes } from "discord.js";
import { logger } from "console-wizard";
import { clientId } from "../../config.json";
const commands: any[] = [];

const subfolders = fs.readdirSync(`./src/commands`);

for (const folder of subfolders) {
  const commandsfiles = fs
    .readdirSync(`./src/commands/${folder}`)
    .filter((file) => file.endsWith(`.ts`));

  for (const file of commandsfiles) {
    const slash = (await import(`../commands/${folder}/${file}`)).default;
    commands.push(slash.data.toJSON());
  }
}

const registercommands = async (
  _: any,
  __: any,
  token: string
): Promise<void> => {
  const rest = new REST({ version: "10" }).setToken(token);
  await rest.put(
    Routes.applicationGuildCommands(clientId, "1137619631985664001"),
    { body: commands }
  );

  logger.success(`Loaded slashcommands (i forgor how many) ${commands.length}`);
};

export default registercommands;
