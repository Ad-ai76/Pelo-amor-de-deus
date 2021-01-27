const Discord = require("discord.js");
const jimp = require("jimp");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'esticar'},
	run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Estique a imagem`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}esticar <usuário> <1 a 5>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}esticar @mynameisgameover 3\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)

let pessoa = client.users.cache.get(args[0]) || message.mentions.users.first()

if(!pessoa) return message.reply(embeduser)

let foto = pessoa.avatarURL({ format: 'jpeg'})

let imagecard = await jimp.read(foto)

imagecard.quality(100);
if(args[1] === "5") {
imagecard.resize(3720, 410);
}
if(args[1] === "4") {
    imagecard.resize(3000, 430)
}
if(args[1] === "3") {
    imagecard.resize(2800, 460)
}
if(args[1] === "2") {
    imagecard.resize(2600, 510)
}
if(args[1] === "1") {
    imagecard.resize(2300, 610)
}
if(!args[1]) return message.reply(embeduser)
if(args[1] > 5) return message.reply(embeduser)
if(args[1] < 1) return message.reply(embeduser)
if(isNaN(args[1])) return message.reply(embeduser)
imagecard.write('Esticar.png')
message.channel.send(``, { files: ["Esticar.png"] })
    }
}