const ms = require('ms');
const config = require('../../../config.json')
const Discord = require('discord.js')

module.exports = {
    config: {
        name: 'end',
        aliases: ['finalizar', 'cancelar'],
    },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Finalize um sorteio`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}end <id_da_mensagem>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}end 791066676665909289\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar Mensagem\`\n<:botonline:769701732128129074> Sinônimos\n\`finalizar | cancelar\``)
        embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
        embeduser.setTimestamp()
        embeduser.setColor(`${config.color}`)

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply(embeduser);
        }
    if(!args[0]){
        return message.reply('Especifique o ID da mensagem do sorteio!');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.reply('Não consegui encontrar um sorteio com ID da mensagem `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.reply('O Sorteio terminará em menos de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' segundos...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.reply('Esse sorteio já acabou!');
        } else {
            console.error(e);
            message.channel.send('Error');
        }
    });
}
}