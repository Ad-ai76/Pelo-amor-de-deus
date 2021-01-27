const Discord = require("discord.js");
const { get } = require("superagent");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'clyde'},
	run: async (client, message, args) => {
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Mande a Clyde Falar alguma coisa`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}clyde <mensagem>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}clyde tudo bem?\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

    if (!args[0]) return message.reply(embeduser)

        let url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor(config.color)
            .setAuthor("Clyde disse..")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 200);
        });
}
}