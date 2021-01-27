const Discord = require('discord.js');
const fortnite = require('simple-fortnite-api'),
	client = new fortnite('3f48c7f0-45bc-4875-9678-766c6abb93f7');
const config = require('../../../config.json')

module.exports = {
	config: {
		name: 'fortnite'},
	    run: async (bot, message, args) => {
            
            const embeduser = new Discord.MessageEmbed()
            embeduser.setTitle(`Veja informações de um jogador de Fortnite`)
            embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}fortnite <username> <lifetime/solo/duo/squad>\``)
            embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}fortnite FL akes duo\``)
            embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
            embeduser.setTimestamp()
            embeduser.setColor(config.color)

            if (!args[0]) return message.channel.send(embeduser);
            if (args[1] && !['lifetime', 'solo', 'duo', 'squad'].includes(args[1])) return message.channel.send(embeduser);
            const gametype = args[1] ? args[1].toLowerCase() : 'lifetime';

            const data = await client.find(args[0]);
            if (data && data.code === 404) return message.reply('Não achei um usuário com esse username.');
            const {
                image,
                url,
                username
            } = data;
            const {
                scorePerMin,
                winPercent,
                kills,
                score,
                wins,
                kd,
                matches
            } = data[gametype];

            const embed = new Discord.MessageEmbed()
                .setColor(config.color)
                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
                .setAuthor(`Fortnite | ${username}`, image)
                .setThumbnail(image)
                .setDescription(`**Modo de jogo:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
            **Kills:** ${kills || 0}
            **Pontos:** ${score || 0}
            **Pontos por minutos:** ${scorePerMin || 0}
            **Vitórias:** ${wins || 0}
            **Porcentagem de vitórias:** ${winPercent || '0%'}
            **Porcentagem de kills/mortes:** ${kd || 0}
            **Partidas jogadas:** ${matches || 0}
            **Link:** [Link do perfil](${url})`);

            message.channel.send(embed);
	}
};