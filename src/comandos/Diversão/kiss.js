const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'kiss'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use esse comando para beijar alguém`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}kiss <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}kiss 648303442737233951\`\n\`${config.prefix}kiss @MyNameIsGameOver\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(embeduser)

    if (user.id === client.user.id) return message.reply('Você não pode me beijar')
    if (user.id === message.author.id) return message.reply('Você não pode beijar você mesmo')
   
    const {body} = await superagent.get(`https://nekos.life/api/v2/img/kiss`);
    const embed = new Discord.MessageEmbed()

    embed.setTitle(`O Amor está no ar`)
    embed.setDescription(`:heart: ${message.author} beijou ${user} :heart:`)
    embed.setImage(body.url)
    embed.setColor(config.color)
    embed.setTimestamp()
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
    message.channel.send(embed)
}
}