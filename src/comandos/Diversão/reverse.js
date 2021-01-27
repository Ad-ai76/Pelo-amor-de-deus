const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'reverse'},
	run: async (client, message, args) => {

    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Reverter uma mensagem`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}reverse <mensagem>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplo`, `\`${config.prefix}reverse tudo bem?\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

    try {
      if (!args[0]) return message.reply(embeduser);
      
      const str = args.join(' ');
      let msg = await message.reply(str.split('').reverse().join(''));
    } catch (err) {
      message.channel.send('Aconteceu um erro!\n' + err).catch();
    }
  }
}