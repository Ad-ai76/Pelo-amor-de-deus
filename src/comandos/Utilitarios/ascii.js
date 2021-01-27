const figlet = require('figlet');
const config = require('../../../config.json')
const Discord = require('discord.js')

module.exports = {
    config: { name: 'ascii' },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Escreva uma mensagem em ascii`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}ascii <mensagem>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}ascii tudo bem?\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)
        if (!args[0]) return message.reply(embeduser)

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('ERRO');
                console.dir(err);
            }
            if (data.length > 2000) return message.reply('Escreva uma mensagem com menos de 2.000 caracteres')

            message.channel.send('```' + data + '```')
        })
    }
}