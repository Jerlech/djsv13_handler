# djsv13_handler

### Full discord.js v13 handler, including events, commands, aliases, slash commands and context menus! 

### Dependencies: `discord.js`, `glob`

### In order to start working on it, please set the guild where the slash commands and context menus will be registered, the bot's prefix and the bot's token in `config.json`!

### If your bot is public and you want to register the slash commands and context menus to every guild your bot joins, go to handler.js in the main project directory and replace this line:

```js
await client.guilds.cache.get(guildId).commands.set(slashCommandsArray)
```
#### with this line: 

```js
await client.application.commands.set(slashCommandsArray)
```


