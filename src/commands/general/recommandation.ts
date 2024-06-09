import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from 'discord.js';
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

                    new StringSelectMenuBuilder()
                    .setCustomId(`photo-${interaction.user.id}`)
                    .setPlaceholder("Style of photography")
                    .setOptions(
                        new StringSelectMenuOptionBuilder()
                        .setLabel("⛰ Landscape photography")
                        .setValue("landscape"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("🌆 Urban photography")
                        .setValue("urban"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("🚻 Portrait photography")
                        .setValue("portrait"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("🚗 Automobile photography")
                        .setValue("automobile"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("❔ Abstract photography")
                        .setValue("abstract"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("😹 Wildlife photography")
                        .setValue("wildlife"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("🏈 Sports photography")
                        .setValue("sports"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("🤏 Macro photography")
                        .setValue("marco"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("📦 Products photography")
                        .setValue("products"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("📃 Documentary photography")
                        .setValue("docs"),
                        new StringSelectMenuOptionBuilder()
                        .setLabel("✨ Events photography")
                        .setValue("events"),

                    )
                    .setMinValues(1)
                    .setMaxValues(11)
                )
            ]
        })

    }
}

export default command;