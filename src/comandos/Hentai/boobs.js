const Discord = require('discord.js');
const config = require('../../../config.json')
const fetch = require('node-fetch');

module.exports = {
	config: {
		name: 'boobs'},
	run: async (bot, message) => {
		if (!message.channel.nsfw) return message.reply(`Você so pode utilizar comandos \`NFSW\` em canais \`NFSW\``);

		const {
			url
		} = await fetch('https://nekos.life/api/v2/img/boobs')
			.then((res) => res.json());

		const embed = new Discord.MessageEmbed()
			.setColor(config.color)
			.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
			.setTitle(`Hentai | Boobs`)
			.setImage(url);
		message.channel.send(embed);
	}
};
