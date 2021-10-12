# dbot
A simple discord bot framework I built. Commands are added by creating new files in the commands folder and will be automatically added by running deploy-cmd.js. Features one example command that also shows how this is done.

```bash
npm install
node index.js
```

In the same folder as index.js you will also need a config.json file with the following structure:
```
{
	"clientId": "BOT_ID_HERE",
	"guildId": "SERVER_ID_HERE",
	"token": "BOT_TOKEN_HERE"
}
```
