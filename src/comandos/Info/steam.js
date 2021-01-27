const Discord = require('discord.js');
const config = require('../../../config.json')
var steam = require('steam-provider');
var provider = new steam.SteamProvider();

module.exports = {
	config: {
		name: 'steam'},
	    run: async (bot, message, args) => {
            
            const embeduser = new Discord.MessageEmbed()
            embeduser.setTitle(`Veja informações de um jogo da Steam`)
            embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}steam <jogo>\``)
            embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}steam CSGO\``)
            embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
            embeduser.setTimestamp()
            embeduser.setColor(config.color)

			const game = args[0];
            const steampng = 'https://i.imgur.com/R40wZCz.png';
            
            if (!game) return message.reply(embeduser);
            
			provider.search(game).then(result => {
				provider.detail(result[0].id, 'portuguese', 'pt').then(results => {
					const embed = new Discord.MessageEmbed()
						.setAuthor('Steam', steampng)
						.setTitle(result[0].name)
						.setThumbnail(results.otherData.imageUrl)
						.addField(`ID do jogo`, result[0].id)
						.addField('Genero', results.genres)
						.addField('Preço', `Preço normal: **${results.priceData.initialPrice}** \n Preço de desconto: **${results.priceData.finalPrice}** `)
						.addField('Publicado por:', results.otherData.publisher)
						.addField('Plataformas', results.otherData.platforms)
						.addField('Desenvolvedor', results.otherData.developer)
						.setColor(config.color)
						.setFooter(`${bot.user.username} | Todos os direitos reservados.`, bot.user.displayAvatarURL());
					message.channel.send(embed).catch(e => {
						message.reply(`Erro ou jogo \`${game}\` não encontrado`);
					});
				});
			});
	}
};