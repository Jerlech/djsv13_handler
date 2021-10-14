module.exports = {
    name: "test",
    description: "Test command",
    run: async(client, interaction) => {
        interaction.deferReply({ ephemeral: false })
        interaction.followUp(`Working!`)
    }
}