const client = require(`../index.js`)
const prefix = '!'

client.on("messageCreate", async message => {
    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;

    let command = client.commands.get(cmd)
    if (command) command.run(client, message, args);
})