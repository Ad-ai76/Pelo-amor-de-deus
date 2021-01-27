const ms = require('ms');
const config = require('../../../config.json')
const Discord = require('discord.js')

module.exports = {
    config: {
        name: 'start',
        aliases: ['começar', 'giveaway', 'sorteio'],
    },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Crie um sorteio`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}start <#canal> <duração> <vencedor(es)> <Prêmio>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}start #sorteio 60m 1 nitro\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar Mensagem\`\n<:botonline:769701732128129074> Sinônimos\n\`giveaway | começar | sorteio\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(`${config.color}`)

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply(embeduser);
        }

        let giveawayChannel = message.mentions.channels.first();

        if (!giveawayChannel) {
            return message.reply(embeduser);
        }

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
            return message.reply('Especifique uma duração valida');
        }

        let giveawayNumberWinners = args[2];

        if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
            return message.reply('Especifique um número de vencedores');
        }


        let giveawayPrize = args.slice(3).join(' ');

        if (!giveawayPrize) {
            return message.reply('Especifique um prêmio!');
        }


        client.giveawaysManager.start(giveawayChannel, {

            time: ms(giveawayDuration),

            prize: giveawayPrize,

            winnerCount: giveawayNumberWinners,

            hostedBy: config.hostedBy ? message.author : null,

            messages: {
                giveaway: (config.everyoneMention ? "@everyone\n\n" : "") + "🎉 **SORTEIO INICIADO** 🎉",
                giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "") + "🎉 **SORTEIO FINALIZADO** 🎉",
                timeRemaining: "Tempo restante: **{duration}**!",
                inviteToParticipate: "Reaja com 🎉 para participar!",
                winMessage: "Parabéns, **{winners}**! Você ganhou **{prize}**!",
                embedFooter: "Sorteio",
                noWinner: "Sorteio Cancelado, Sem participantes.",
                hostedBy: "Sorteio Criado por: {user}",
                winners: "Vencedor(es)",
                endedAt: "Terminou em",
                units: {
                    seconds: "segundos",
                    minutes: "minutos",
                    hours: "horas",
                    days: "dias",
                    pluralS: false
                }
            }
        });

        message.reply(`Giveaway começou no canal **${giveawayChannel}**!`);
    }
}