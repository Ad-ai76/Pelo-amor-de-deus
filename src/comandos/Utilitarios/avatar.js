const Discord = require('discord.js')
const config = require("../../../config.json")
const prefix = config.prefix

module.exports = {
    config: { name: 'avatar' },
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })

        const embed = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle(`Avatar de ${user.username}`)
            .setDescription("🖼️ | Clique **[aqui](" + avatar + ")** para baixar a imagem.")
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        message.reply(embed)
    }
}