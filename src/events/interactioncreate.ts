import Discord, { ButtonBuilder, StringSelectMenuBuilder } from "discord.js";
import superclient from "../index";
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
        await command.run(client, interaction as Discord.CommandInteraction);
      } catch (e) {
        console.log(e);
      }
      // } else if (interaction.isButton()) {
      //   if (
      //     interaction.customId.startsWith("portraits-") ||
      //     interaction.customId.startsWith("landscapes") ||
      //     interaction.customId.startsWith("vehicles") ||
      //     interaction.customId.startsWith("aviation")
      //   ) {
      //     const user = interaction.customId.split("-")[1];
      //     interaction.message.edit({
      //       embeds: [
      //         new Discord.EmbedBuilder()
      //           .setTitle("What is your budget?")
      //           .setDescription(
      //             "What is your budget for your gear? \n$200-$300 \n$400-$500 (recommended) \n$500-$800 \n$800-$1000+"
      //           )
      //           .setFooter({ text: "created by jadebetty" })
      //           .setTimestamp()
      //           .setColor("#9ae2b6"),
      //       ],
      //       components: [
      //         new Discord.ActionRowBuilder().setComponents(
      //           new Discord.StringSelectMenuBuilder()
      //             .setCustomId(`budget-${user}`)
      //             .setPlaceholder("Select your budget!")
      //             .addOptions(
      //               new Discord.StringSelectMenuOptionBuilder()
      //                 .setLabel("$200-$300")
      //                 .setDescription(
      //                   "A $200 to $300 budget. Will get you a used Nikon."
      //                 )
      //                 .setValue('200')
      //             )
      //         ),
      //       ],
      //     });
      //   } else if (interaction.customId.startsWith("next")) {
      //     const user = interaction.customId.split("-")[1];
      //     interaction.message.edit({
      //       components: [
      //         new Discord.ActionRowBuilder()
      //         .setComponents(
      //           new ButtonBuilder()
      //           .setLabel("Astro photography")
      //           .setCustomId(`astro-${user}`)
      //           .setStyle(Discord.ButtonStyle.Success),
      //           new ButtonBuilder()
      //           .setLabel("Urban photography")
      //           .setCustomId(`urban-${user}`)
      //           .setStyle(Discord.ButtonStyle.Success),
      //           new ButtonBuilder()
      //           .setLabel("Sports photography")
      //           .setCustomId(`sports-${user}`)
      //           .setStyle(Discord.ButtonStyle.Success),
      //           new ButtonBuilder()
      //           .setLabel("Astro photography")
      //           .setCustomId(`astro-${user}`)
      //           .setStyle(Discord.ButtonStyle.Success),
      //           new ButtonBuilder()
      //           .setLabel("Astro photography")
      //           .setCustomId(`astro-${user}`)
      //           .setStyle(Discord.ButtonStyle.Success),\

      //         )
      //       ]
      //     })
      //   }
    } else if (interaction.isStringSelectMenu()) {
      const user = interaction.customId.split("-")[1];
      if (interaction.customId.startsWith("photo")) {
        interaction.message.edit({
          embeds: [
            new Discord.EmbedBuilder()
              .setTitle("What is your budget?")
              .setDescription(
                "What is your budget for your gear? \n$300 \n$400-$500 (recommended) \n$500-$800 \n$800-$1000+"
              )
              .setFooter({ text: "created by jadebetty" })
              .setTimestamp()
              .setColor("#9ae2b6"),
          ],
          components: [
            new Discord.ActionRowBuilder<StringSelectMenuBuilder>().setComponents(
              new Discord.StringSelectMenuBuilder()
                .setCustomId(`budget-${user}`)
                .setPlaceholder("Select your budget!")
                .setMaxValues(1)
                .addOptions(
                  new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$300")
                    .setValue("300"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$400")
                    .setValue("400"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$500")
                    .setValue("500"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$600")
                    .setValue("600"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$700")
                    .setValue("700"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$800")
                    .setValue("800"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$900")
                    .setValue("900"),
                    new Discord.StringSelectMenuOptionBuilder()
                    .setLabel("$1000+")
                    .setValue("1000"),
                )
            ),
          ],
        });

        interaction.reply({content: "You've selected " + interaction.values.join(", ") + " photography!", ephemeral: true})
      } else if (interaction.customId.startsWith("budget")) {
        interaction.reply({ ephemeral: true, content: "Your budget is $" + interaction.values[0] + "!"})
      }
    }
  },
};

export default event;
