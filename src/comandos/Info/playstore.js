/* eslint-disable consistent-return */

const Discord = require('discord.js');
const PlayStore = require('google-play-scraper');
const config = require('../../../config.json')

module.exports = {
	config: {
		name: 'playstore'},
	run: async (bot, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Veja informações de um jogo/app da PlayStore!`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}playstore <jogo/app>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}playstore Free Fire\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)

		if (!args[0]) {
			return message.reply(embeduser);
		}

		try {
			PlayStore.search({
				term: args.join(' '),
				num: 1
			}).then(Data => {
				let App;

				try {
					App = JSON.parse(JSON.stringify(Data[0]));
				} catch (error) {
					return message.reply(`Não encontrei nenhum app/jogo com esse **Nome**`);
				}

				if (App.priceText === 'FREE') App.priceText = 'Gratuito';

				const Embed = new Discord.MessageEmbed()
					.setColor(config.color)
					.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
					.setThumbnail(App.icon)
					.setURL(App.url)
					.setTitle(`${App.title}`)
					.setDescription(`**Descrição do App/Jogo:**\n\`${App.summary}\``)
					.addField(`Desenvolvedor:`, `\`${App.developer}\``)
					.addField(`Preço:`, `\`${App.priceText}\``)
					.addField(`Avaliação:`, `\`${App.scoreText}\``);

				return message.channel.send(Embed);
			});
		} catch (err) {
			message.channel.send(`Error: ${err}`);
		}
	}
};
