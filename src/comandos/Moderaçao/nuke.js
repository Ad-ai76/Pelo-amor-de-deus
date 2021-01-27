const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
    config: { name: 'nuke', aliases: ['nuked'] },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`De nuke no chat`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}nuke\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}nuke\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar canais\`\n<:botonline:769701732128129074> Sinônimos\n\`nuked\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(`${config.color}`)

        if (!message.member.permissions.has(['MANAGE_CHANNELS']))
            return message.channel.send(embeduser)
        if (!message.guild.me.hasPermission(['MANAGE_CHANNELS']))
            return message.reply('Eu não tenho permissão de `Gerenciar Canais`')

        let channel = client.channels.cache.get(message.channel.id)
        const position = channel.position
        const topic = channel.topic

        const channel2 = await channel.clone()

        channel2.setPosition(position)
        channel2.setTopic(topic)
        channel.delete()
        let embed = new Discord.MessageEmbed()
            .setTitle("Nuked")
            .setDescription(`Canal nuked`)
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
            .setImage(`https://i.imgur.com/Rxlvu7g.gif`)
            .setColor(config.color)
            .setTimestamp()
        channel2.send(embed)
    }
}