module.exports = {
    name: "test",
    description: "Test command.",
    run: async (client, interaction, args) => {
      interaction.deferReply({ephemeral: false})
      interaction.followUp(`Working!`)
    }
}