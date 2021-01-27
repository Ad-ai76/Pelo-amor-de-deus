const Discord = require('discord.js')
const axios = require('axios');
const config = require('../../../config.json')

module.exports = {
	config: {name: 'wink'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use esse comando para pisca pra alguém`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}wink <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}wink 648303442737233951\`\n\`${config.prefix}wink @MyNameIsGameOver\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(embeduser)

    if (user.id === client.user.id) return message.reply('Você não pode pisca para mim')
    if (user.id === message.author.id) return message.reply('Você não pode pisca para você mesmo')
    const url = 'https://some-random-api.ml/animu/wink';


    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`Ocorreu um erro na execução do comando`)
    }
    const embed = new Discord.MessageEmbed()

    embed.setDescription(`😉 ${message.author} piscou para ${user} 😉`)
    embed.setImage(data.link)
    embed.setColor(config.color)
    embed.setTimestamp()
    embed.setFooter(`Requisitado por: ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
    message.channel.send(embed)
}
}