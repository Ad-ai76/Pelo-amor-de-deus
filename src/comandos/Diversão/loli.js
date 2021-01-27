const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../../config.json');

module.exports = {
	config: {name: 'loli'},
	run: async (client, message, args) => {

    const links = ['https://api.lolis.life/neko'];
    const link = links[Math.floor(Math.random() * links.length)]

    const { body } = await superagent.get(link)

    const embed = new Discord.MessageEmbed()

    embed.setTitle(`👮👮👮👮`)
    embed.setImage(body.url)
    embed.setColor(config.color)
    embed.setTimestamp()
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))

    message.channel.send(embed)

}
}