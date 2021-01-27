const Discord = require('discord.js');
const config = require('../../../config.json')

module.exports = {
	config: {name: 'ping'},
	run: async (client, message, args) => {

    const m = await message.reply(`Ping?`)
    
    const embed = new Discord.MessageEmbed()
      embed.setTitle('Pong')
      .setColor(config.color)
      embed.addField(`<a:botping:765315050227105802> Latencia do servidor \`${m.createdTimestamp - message.createdTimestamp}\` MS`, `**<:botbot:766468810064396328> Latencia do Bot \`${Math.round(client.ws.ping)}\` MS**`)
      .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))

  m.edit(embed)
}
}