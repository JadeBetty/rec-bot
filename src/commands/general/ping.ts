import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
const command = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("gets the ping, i guess?"),
    async run (_: any, interaction: any) {
        interaction.reply("ping pong now go smd")

    }
}

export default command;