const Discord = require('discord.js');
const config = require('../../../config.json')

module.exports = {
	config: {name: 'emojify'},
	run: async (client, message, args) => {

  const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Envie uma mensagem com Emojify`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}emojify <mensagem>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}emojify Tudo bem?\``)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

 const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
 };

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

  if (args.length < 1) {
    message.channel.send(embeduser);
}

if (args.length > 2000) return message.reply('Escreva uma mensagem com menos de 2.000 caracteres')

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
}
}