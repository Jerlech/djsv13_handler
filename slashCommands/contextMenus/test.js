module.exports = {
    name: 'test',
    type: 'USER',
    run: async(mgk, interaction) => {
        interaction.deferReply({ ephemeral: false })
        interaction.followUp(`Working!`)
    }
}