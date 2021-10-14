const { prefix } = require(`../config.json`)
const client = require(`../index.js`)

client.on("messageCreate", async message => {
    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;

    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd))
    if (command) command.run(client, message, args);
})