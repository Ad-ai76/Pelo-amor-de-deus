const config = require('../../../config.json')
const Discord = require("discord.js");

module.exports = {
    config: { name: 'ban', aliases: ['banir'] },
    run: async (client, message, args) => {

    let member = message.mentions.users.first() || message.guild.members.cache.get(args[0])

    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Use para banir um usuário`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}ban <usuário> <motivo>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}ban @mynamsigameover Lindão\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Banir Membros\`\n<:botonline:769701732128129074> Sinônimos\n\`banir\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    embeduser.setTimestamp()
    embeduser.setColor(`${config.color}`)

    if (!message.member.permissions.has(['BAN_MEMBERS']))
        return message.reply(embeduser)
    if (!message.guild.me.hasPermission(['BAN_MEMBERS']))
        return message.reply('Eu não tenho permissão de `Gerenciar mensagem e Gerenciar Canais`')

    if (!member) return message.channel.send(embeduser)

    let simesmo = new Discord.MessageEmbed()
        .setDescription(`Você não pode banir si mesmo`)
        .setColor(config.color)
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    if (member.user.id === message.author.id) return message.channel.send(simesmo)

    let error6 = new Discord.MessageEmbed()
        .setDescription(`<a:No:740765116051750977> | Eu não posso banir esse usuário`)
        .setColor(config.color)
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    if (!member.bannable) return message.channel.send(error6)

    let reason = args.slice(1).join(" ")
    if (!reason) reason = "Motivo Não Informado"

    let yn = new Discord.MessageEmbed()
        .setDescription(`Clique no emoji <a:bot_correto:789529157662670929> para banir o(a) ${member.user.username}!`)
        .setColor(config.color)
        message.channel.send(yn).then(msg => {
        msg.react("789529157662670929")

        let filtro = (reaction, usuario) => reaction.emoji.id === "789529157662670929" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, { max: 1 })

        coletor.on("collect", cp => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`${member.user.username} Foi banido!`)
            .setDescription(`
            > **Membro banido:**
            **${member.user.username}**
            > **ID Do Membro:**
            \`${member.user.id}\`

            > **Administrador:**
            \`${message.author}\`
            > **ID Do Administrador**
            \`${message.author.id}\`

            > **Motivo do Banimento:**
            \`${reason}\`
            `)
            .setColor(config.color)
            message.channel.send(embed);
            cp.remove(message.author.id);
            member.ban();
            let embed2 = new Discord.MessageEmbed()
                .setTitle(`Você está banido do ${message.guild.name}!`)
                .setDescription(`**Banido Por**
                \`${message.author.tag}\`

                **Motivo do Banimento**
                \`${reason}\``)
                .setColor(config.color)
            client.users.cache.get(member.id).send(embed2)
        })
    })
}
}