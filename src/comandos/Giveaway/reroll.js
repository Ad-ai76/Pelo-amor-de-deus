const ms = require('ms');
const config = require('../../../config.json')
const Discord = require('discord.js')

module.exports = {
    config: {
        name: 'reroll',
        aliases: ['rolar'],
    },
    run: async (client, message, args) => {

        const embeduser = new Discord.MessageEmbed()
        embeduser.setTitle(`Caiu no seu inimigo? Role um novo usuário no sorteio`)
        embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}reroll <id_da_mensagem>\``)
        embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}reroll 791066676665909289\`\n\n<:Pink_Cadeado:770304704923566150> **Permissão**\n\`Gerenciar Mensagem\`\n<:botonline:769701732128129074> Sinônimos\n\`reroll\``)
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
        return message.channel.send('Não consegui encontrar um sorteio com ID da mensagem `'+ args.join(' ') +'`.');
    }


    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {

        message.channel.send('Giveaway rolado!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('Este sorteio não acabou!');
        } else {
            console.error(e);
            message.channel.send('Error...');
        }
    });

}
}