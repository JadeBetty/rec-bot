import Discord from "discord.js";
import superclient from '../index';
//import { logger } from 'console-wizard';
const event = {
  event: "interactionCreate",
  async run(interaction: Discord.BaseInteraction, client: superclient) {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content:
            "That command doesn't exist.. Skill issue because this is a slashcommand.. That means. I don't know. Fix it.",
          ephemeral: true,
        });
        try {
            await command.run(client, interaction as Discord.CommandInteraction)
        } catch (e) {
            console.log(e)
        }
    }
  },
};

export default event;
