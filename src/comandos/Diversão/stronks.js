const jimp = require("jimp")
const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'stronks'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Stronks`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}stronks <mensagem>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}stronks comprei um pc 2 gamer por 10 reais\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

        let img = jimp.read("https://media.discordapp.net/attachments/723135289320538152/733670552622989352/stonks-meme.png")
        if (!args[0]) return message.reply(embeduser)
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                image.resize(685, 500)
                image.print(font, 20, 30, args.join(" "), 700)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "stonks.png"}]})
                })
            })
        })
    }
  }