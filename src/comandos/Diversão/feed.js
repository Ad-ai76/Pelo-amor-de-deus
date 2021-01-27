const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'feed'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use esse comando para dar comida para alguém`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}feed <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}feed 648303442737233951\`\n\`${config.prefix}feed @MyNameIsGameOver\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(embeduser)

    if (user.id === client.user.id) return message.reply('Você não pode me dar comida')
    if (user.id === message.author.id) return message.reply('Você não pode dar comida para você mesmo')
   
    const {body} = await superagent.get(`https://nekos.life/api/v2/img/feed`);
    const embed = new Discord.MessageEmbed()

    embed.setTitle(`Está com fome?`)
    embed.setDescription(`🥘 ${message.author} deu comida para ${user} 🥘`)
    embed.setImage(body.url)
    embed.setTimestamp()
    embed.setColor(config.color)
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
    message.channel.send(embed)
}
}