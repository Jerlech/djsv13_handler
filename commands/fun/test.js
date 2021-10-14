module.exports = {
    name: `test`,
    aliases: [`t`, `tst`],
    run: async(client, message, args) => {
        message.reply(`Working!`)
    }
}