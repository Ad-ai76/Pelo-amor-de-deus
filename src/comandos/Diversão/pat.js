const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../../config.json')
const cooldown = new Set()

module.exports = {
	config: {name: 'pat'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use esse comando dar um tapinha em alguém`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}pat <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}pat 648303442737233951\`\n\`${config.prefix}pat @MyNameIsGameOver\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(embeduser)

    if (user.id === client.user.id) return message.reply('Você não pode me dar um tapinha')
    if (user.id === message.author.id) return message.reply('Você não pode dar um tapinha em você mesmo')
   
    const {body} = await superagent.get(`https://nekos.life/api/v2/img/pat`);
    const embed = new Discord.MessageEmbed()

    embed.setTitle(`Huuum`)
    embed.setDescription(`🥰 ${message.author} levou um tapinha de ${user} 🥰`)
    embed.setImage(body.url)
    embed.setColor(config.color)
    embed.setTimestamp()
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
    message.channel.send(embed)
}
}