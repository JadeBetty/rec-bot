import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
const command = {
    data: new SlashCommandBuilder()
    .setName("recommend")
    .setDescription("give somebody a camera rec? maybe")
    .addUserOption(option => option
        .setName("user")
        .setDescription("the user you wanna give a rec to")
        .setRequired(true)
    ),
    async run (_: any, interaction: any) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle("What do you want to photograph?")
                .setDescription("Give us what you want to photograph, wildlife, avaition, portraits, landscapes, vehicles etc...")
                .setFooter({ text: "created by jadebetty"})
                .setTimestamp()
                .setColor("#9ae2b6")
            ],
            components: [
                new ActionRowBuilder()
                .setComponents(
                    new ButtonBuilder()
                    .setLabel("Portraits")
                    .setCustomId(`portraits-${interaction.user.id}`)
                    .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                    .setLabel("Landscapes")
                    .setCustomId(`landscapes-${interaction.user.id}`)
                    .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                    .setLabel("Vehicles")
                    .setCustomId(`vehicles-${interaction.user.id}`)
                    .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                    .setLabel("Aviation")
                    .setCustomId(`avaition-${interaction.user.id}`)
                    .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                    .setLabel("Next")
                    .setCustomId(`next-${interaction.user.id}`)
                    .setStyle(ButtonStyle.Danger),
                )
            ]
        })

    }
}

export default command;