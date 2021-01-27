const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    config: {
        name: 'addemoji',
    },
    run: async (client, message, args) => {
        const REGEX = /:[^:\s]*(?:::[^:\s]*)*:/

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Adicione um emoji no servidor`)

        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}addemoji <imagem>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}addemoji\` <:bot_staff:789526659665100811>\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar Emojis\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(`${config.color}`)

        if (!message.member.permissions.has(['MANAGE_EMOJIS']))
            return message.reply(embeduser)
        if (!message.guild.me.hasPermission(['MANAGE_EMOJIS']))
            return message.reply('Eu não tenho permissão de `Gerenciar emojis`')

        if (!REGEX.test(args[0])) return message.channel.send(embeduser)

        const emojis = args[0].trim().split(':')[2].slice(0, 18)

        const emoji = client.emojis.cache.find(emoje => emoje.id == emojis)

        message.guild.emojis.create(emoji.url, emoji.name)

        let emoji2 = emoji.identifier
        if (!emoji2.startsWith('a:')) emoji2 = `:${emoji2}`

        let embed = new Discord.MessageEmbed()
            .setTitle(`Adicionei um emoji no servidor`)
            .setDescription(`<${emoji2}> | Foi adicionado no ${message.guild.name}.`)
            .setColor('#24FF00')
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))

        message.channel.send(embed)
    }
}