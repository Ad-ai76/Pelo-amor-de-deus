const Discord = require('discord.js')
const config = require('../../../config.json')
const { encode, decode } = require('@yerkopalma/morsee')

module.exports = {
    config: { name: 'morse' },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Codigo morse`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}morse <mensagem>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}morse tudo bem?\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)

        if (!args[0]) return message.channel.send(embeduser)

        let encoded = decode(args.join(' '))
        let title = 'Decodificado'
        if (!encoded) {
            encoded = encode(args.join(' '))
            title = 'Codificado'
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(`Codigo Morse ${title}`)
            .setDescription(encoded)
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
            .setColor(config.color)
            .setTimestamp()

        message.channel.send(embed)

    }
}