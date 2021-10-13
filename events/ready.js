const client = require(`../index.js`)

client.once("ready", async() => console.log(`${client.user.username} Ready ✅`))