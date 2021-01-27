const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../../config.json')

module.exports = {
    config: { name: 'gay', aliases: ['voceegay']},
    run: async (client, message, args) => {

  const amor = Math.floor(Math.random() * 100);
  const loveIndex = Math.floor(amor / 10);
  const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);

    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;


        let embed = new Discord.MessageEmbed()

        .setTitle(`:rainbow_flag: │ Máquina de Gay`)
        .setDescription("<@"+user+"> é **"+amor+"%** [`"+loveLevel+"`] **Gay**")
        .setColor(config.color)
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        
        if(user.id === "781318452588707840") return message.reply('Bobinha(o) e claro que eu não sou gay')
        if(user.id === "648303442737233951") return message.reply('Fiquei sabendo que ele e 100% Homem')
        message.channel.send(embed)
    }
}