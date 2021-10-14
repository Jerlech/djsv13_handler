module.exports = {
    name: 'test',
    type: 'USER',
    run: async(client, interaction) => {
        interaction.deferReply({ ephemeral: false })
        interaction.followUp(`Working!`)
    }
}