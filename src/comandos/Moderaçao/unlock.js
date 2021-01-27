const Discord = require('discord.js');
const config = require('../../../config.json')

module.exports = {
  config: {name: 'unlock', aliases: ['desbloquear']},
  run: async (client, message, args) => {
    if (!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_CHANNELS']))
      return message.channel.send(embeduser);

    if (!message.guild.me.hasPermission(['ADMINISTRATOR', 'MANAGE_CHANNELS']))
      return message.channel.send("Eu preciso da permissão `Administrador e Gerenciar Canais`");

    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Faça o chat ser desbloqueado`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}unlock\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}unlock\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Administrador e Gerenciar canais\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    embeduser.setTimestamp()
    embeduser.setColor(`${config.color}`)

    const everyone = message.guild.roles.cache.find(x => x.name === '@everyone');

    const embed = new Discord.MessageEmbed()
        .setTitle(`Alguem desbloqueou o canal | ${message.channel.name}**`)
        .addField(`<:bot_discord:789506342229639188> | O Canal foi desbloqueado por:`,
          message.author)
        .setColor(config.color)

    if (message.channel.updateOverwrite(everyone, { SEND_MESSAGES: true })) {
      return message.channel.send(embed)
    }
  }
}