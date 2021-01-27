const Discord = require("discord.js");
const config = require('../../../config.json')

module.exports = {
    config: { name: 'slowmode', aliases: ['modolento'] },
    run: async (client, message, args) => {

        const numbers = args[0]

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Coloque modo lento no chat`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}slowmode <tempo>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}slowmode 5\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar Mensagens e Gerenciar Canais\`\n<:botonline:769701732128129074> Sinônimos\n\`modolento\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(`${config.color}`)

        if (!message.member.permissions.has(['MANAGE_MESSAGES', 'MANAGE_CHANNELS']))
            return message.reply(embeduser)
        if (!message.guild.me.hasPermission(['MANAGE_MESSAGES', 'MANAGE_CHANNELS']))
            return message.reply('Eu não tenho permissão de `Gerenciar mensagem e Gerenciar Canais`')

        if (!args[0]) return message.reply(embeduser)

        if (isNaN(args[0])) return message.reply("Coloque somente números")

        if (numbers > 21600) return message.reply(`**O Número \`${args[0]}\` é irreconhecível, tente novamente usar um número abaixo dê \`21600\`**`)

        message.channel.setRateLimitPerUser(args[0])
        return message.reply(`**O slowmode do canal foi setado para \`${args[0]}\`**`)
    }
}