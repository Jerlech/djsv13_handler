const { glob } = require("glob")
const { promisify } = require("util")
const prom = promisify(glob)
const { guildId } = require(`./config.json`)

module.exports = async(client) => {
    const commandFiles = await prom(`${process.cwd()}/commands/**/*.js`)
    commandFiles.map(async v => {
        const file = require(v)
        const s = v.split("/");
        const dir = s[s.length - 2]

        if (file.name) {
            const props = { dir, ...file }
            client.commands.set(file.name, props)
        }

        if (file.aliases && Array.isArray(file.aliases)) {
            file.aliases.forEach(async alias => client.aliases.set(alias, file.name))
        }

    })

    const eventFiles = await prom(`${process.cwd()}/events/*.js`);
    eventFiles.map(async v => require(v))


    const slashCommands = await prom(
        `${process.cwd()}/slashCommands/*/*.js`
    )

    const slashCommandsArray = [];
    slashCommands.map(async v => {
        const file = require(v)
        if (!file.name) return
        client.slashCommands.set(file.name, file)

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description
        slashCommandsArray.push(file)
    })

    client.on("ready", async() => {
        await client.guilds.cache.get(guildId).commands.set(slashCommandsArray)
    })
}