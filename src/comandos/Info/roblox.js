const Discord = require('discord.js');
const roblox = require('noblox.js');
const config = require('../../../config.json')

module.exports = {
	config: {
		name: 'roblox'},
	run: async (bot, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Veja informações de um usuário do roblox`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}roblox <username>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}roblox EuroCow\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
        embeduser.setTimestamp()
        embeduser.setColor(config.color)

		try {
            const username = args[0];
            if (!username) return message.reply(embeduser);
            if (username) {
                roblox.getIdFromUsername(username).then(id => {
                    if (id) {
                        roblox.getPlayerInfo(parseInt(id)).then((info) => {
                            const date = new Date(info.joinDate);

                            const embed = new Discord.MessageEmbed()
                                .setColor(config.color)
                                .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
                                .setURL(`https://roblox.com/users/${id}/profile`)
                                .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                                .addField('Usúario:', info.username || 'Não achei.')
                                .addField('ID:', id || 'Não achei.')
                                .addField('Blurb:', info.blurb || 'Não sei.')
                                .addField('Descrição:', info.status || 'Não tem.')
                                .addField('Idade da conta:', `${info.age} dias atrás` || 'Não sei.')
                                .addField('Link', `[**Clique Aqui**](https://roblox.com/users/${id}/profile)`);
                            message.channel.send({embed});
                        });
                    }
                }).catch((err) => {
                    message.reply('Esse usuário não existe');
                });
            } else {
                message.reply(`Não encontrei esse usuário`);
            }
    } catch (err) {
        message.channel.send(`Error: ${err}`);
    }
    }
};