const { MessageEmbed } = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'servericon'},
	run: async (client, message, args) => {
    
  let ft = message.guild.iconURL({ size: 2048, dynamic: true, format: "png",})

  const embed = new MessageEmbed()
  .setColor(config.color)
  .setTitle(`Icone do server ${message.guild}`)
  .setDescription("🖼️ | Clique **[aqui]("+ft+")** para baixar o icone do servidor")
  .setImage(ft)
  .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))

    message.reply(embed)
  }
}  