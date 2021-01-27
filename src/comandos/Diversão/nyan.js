const Discord = require('discord.js')

module.exports = {
	config: {name: 'nyan'},
	run: async (client, message, args) => {

    message.channel.send(`${message.author}`, { files: ['https://i.imgur.com/p6pcvjk.png'] })
    }
}