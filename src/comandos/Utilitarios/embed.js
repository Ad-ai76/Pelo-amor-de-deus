const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'embed'},
	run: async (client, message, args) => {

	 const embeduser = new Discord.MessageEmbed()
	  embeduser.setTitle(`Mande o bot enviar uma mensagem em embed`)
	  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}embed <mensagem>\``)
	  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}embed tudo bem?\``)
	  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
	  embeduser.setTimestamp()
    embeduser.setColor(config.color)

  let mensg = args.join(' ')
  if (!mensg) {
    message.channel.send(embeduser)
    return undefined;
  }

  const embed = new Discord.MessageEmbed()
    .setDescription(`${mensg}`)
    .setColor(config.color)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
  message.channel.send(embed)
}
}