const config = require('../../../config.json');
const Discord = require('discord.js');

module.exports = {
	config: {name: '8ball'},
	run: async (client, message, args) => {

    const resultados = [ 
        "Sim!",
        "Não",
        "Talvez",
        "Provavelmente",
        "Acho que não.",
        "Nunca!",
        "Você pode tentar...",
        "Você Decide!",
        "SEM DÚVIDAS!",
]
    const resultado = Math.floor((Math.random() * resultados.length));

    if (!args[0]) return message.reply('Você precisa escrever algo!')

    const embed = new Discord.MessageEmbed()
    
    embed.setTitle("8Ball")
    embed.setColor(config.color)
    embed.addField("Pergunta:", args.join(' '))
    embed.addField("Resposta", resultados[resultado])
    embed.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    message.reply(embed)
}
}