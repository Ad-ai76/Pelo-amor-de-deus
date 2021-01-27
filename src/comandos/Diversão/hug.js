const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'hug'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use esse comando para dar um abraço em alguém`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}hug <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}hug 648303442737233951\`\n\`${config.prefix}hug @MyNameIsGameOver\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(embeduser)

    if (user.id === client.user.id) return message.reply('Você não pode me abraçar')
    if (user.id === message.author.id) return message.reply('Você não pode abraçar você mesmo')
   
    const {body} = await superagent.get(`https://nekos.life/api/v2/img/hug`);
    const embed = new Discord.MessageEmbed()

    embed.setTitle(`Melhore amigos para sempre`)
    embed.setDescription(`${message.author} abraçou ${user}`)
    embed.setImage(body.url)
    embed.setColor(config.color)
    embed.setTimestamp()
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
    message.channel.send(embed)
}
}