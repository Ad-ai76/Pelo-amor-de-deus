const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    config: { name: 'jokempo' },

    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Jokempo`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}jokempo <pedra/papel/tesoura>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}jokempo pedra\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)

        const rng = Math.floor((Math.random() * 100) + 1);

        if (args[0] === 'pedra' && rng > 0 && rng <= 34) {
            return message.reply('Escolhi Pedra, empatamos!');
        } else if (args[0] === 'pedra' && rng > 34 && rng <= 67) {
            return message.reply('Escolhi Papel, eu ganhei!');
        } else if (args[0] === 'pedra' && rng > 67 && rng <= 100) {
            return message.reply('Escolhi Tesoura, Você ganhou!');
        } else if (args[0] === 'papel' && rng > 0 && rng <= 34) {
            return message.reply('Escolhi Papel, empatamos!');
        } else if (args[0] === 'papel' && rng > 34 && rng <= 67) {
            return message.reply('Escolhi Tesoura, eu ganhei!');
        } else if (args[0] === 'papel' && rng > 67 && rng <= 100) {
            return message.reply('Escolhi Pedra, você ganhou!');
        } else if (args[0] === 'tesoura' && rng > 0 && rng <= 34) {
            return message.reply('Escolhi Tesoura, empatamos!');
        } else if (args[0] === 'tesoura' && rng > 34 && rng <= 67) {
            return message.reply('Escolhi Pedra, eu ganhei!');
        } else if (args[0] === 'tesoura' && rng > 67 && rng <= 100) {
            return message.reply('Escolhi Papel, Você ganhou!');
        }
        if (args[0] !== 'pedra' || args[0] !== 'papel' || args[0] !== 'tesoura') {
            return message.reply(embeduser);
        }
    }
}