const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Says hi to you, scrub"),
    async execute(interaction) {
        await interaction.reply("henlo OmO");
    },
};