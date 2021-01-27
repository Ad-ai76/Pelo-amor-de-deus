var weather = require('weather-js');
const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'clima'},
	run: async (client, message, args) => {

	const embeduser = new Discord.MessageEmbed()
	  embeduser.setTitle(`Veja o clima da sua cidade`)
	  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}clima <estado> [cidade]\``)
	  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}clima parana toledo\n${config.prefix}clima parana\``)
	  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
	  embeduser.setTimestamp()
	  embeduser.setColor(config.color)

    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (!result) return message.reply(embeduser)
        if (!result[0]) return message.reply(`Essa cidade não existe`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**${result[0].location.name}**`)
            .addField(`**☀️ » Temperatura**`, `\`${result[0].current.temperature}°C\``)
            .addField(`**🌡️ » Sensação Térmica**`, `\`${result[0].current.feelslike}°C\``)
            .addField(`**💦 » Umidade**`, `\`${result[0].current.humidity}%\``)
            .addField(`**💨 » Vento**`, `\`${result[0].current.windspeed}\``)
            .setColor("#8B008B")
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
            .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
        message.channel.send(embed)
    });
}
}