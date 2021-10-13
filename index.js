const { Client, Collection } = require("discord.js")
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
    presence: {
        activities: [{
            name: `test`,
            type: `COMPETING`
        }],
        status: "dnd"
    }
})
module.exports = client
const keepAlive = require(`./alive.js`)
keepAlive()

client.slashCommands = new Collection()
client.commands = new Collection()

require(`./handler.js`)(client)

client.login(process.env.token)