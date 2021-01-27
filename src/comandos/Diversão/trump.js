const jimp = require("jimp") // npm install jimp
const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'trump'},
	run: async (client, message, args) => {

    const embeduser = new Discord.MessageEmbed()
  embeduser.setTitle(`Mande um twitter do trump`)
  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}trump <mensagem>\``)
  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}trump tudo bem?\``)
  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
  embeduser.setTimestamp()
  embeduser.setColor(config.color)

    let img = jimp.read("https://i.imgur.com/3YC2Q5r.png")
        if (!args[0]) return message.reply(embeduser)
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(1000,500)
                image.print(font, 22, 120, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "trump.png"}]})
                })
            })
        })
}
}