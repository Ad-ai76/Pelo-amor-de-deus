const Discord = require("discord.js")
const config = require('../../../config.json')

module.exports = {
	config: {name: 'say'},
	run: async (client, message, args) => {

	 const embeduser = new Discord.MessageEmbed()
	  embeduser.setTitle(`Mande o bot enviar uma mensagem`)
	  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}say <mensagem>\``)
	  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}say tudo bem?\``)
	  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
	  embeduser.setTimestamp()
	  embeduser.setColor(config.color)
  
    if(args.join(' ').includes('@everyone') || args.join(' ').includes('@here') || message.mentions.roles.first()) {
        return message.reply(`Você não pode marça everyone/here ou cargos`)
    }

    if (!args.join(" ")) return message.reply(embeduser)
    const say = args.join(' ');

    message.channel.send(`${say}\n\nSay enviado por ||${message.author}||`)
    }
}