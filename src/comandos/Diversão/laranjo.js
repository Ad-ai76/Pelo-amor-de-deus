const jimp = require("jimp")
const config = require('../../../config.json')
const Discord = require('discord.js')

module.exports = {
	config: {name: 'laranjo'},
	run: async (client, message, args) => {

		const embeduser = new Discord.MessageEmbed()
		  embeduser.setTitle(`Mande o laranjo falar alguma coisa`)
		  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}laranjo <mensagem>\``)
		  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}laranjo tudo bem?\``)
		  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
		  embeduser.setTimestamp()
		  embeduser.setColor(config.color)
		  
        let img = jimp.read("https://i.imgur.com/ckRn3lR.png")
        if (!args[0]) return message.reply(embeduser)
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(336, 300)
                image.print(font, 10, 50, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send(`${message.author}`, {files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }
}