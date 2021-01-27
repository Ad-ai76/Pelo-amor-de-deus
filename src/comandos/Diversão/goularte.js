const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'goularte'},
	run: async (client, message, args) => {
    
  const embeduser = new Discord.MessageEmbed()
  embeduser.setTitle(`Mande o Goularte escrever uma mensagem`)
  embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}goularte <mensagem>\``)
  embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}goularte tudo bem?\``)
  embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
  embeduser.setTimestamp()
  embeduser.setColor(config.color)
  
  if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS'))
    return message.reply('Eu não tenho permissão de `Gerenciar WeebHooks`')
	
  if(!args[0])
	return message.channel.send(embeduser)
  
  let msg = args.slice(0).join(" ")

  message.channel.fetchWebhooks().then(webhooks => {
    if (webhooks.some(w => w.name === 'Goularte')) {
      webhooks.find(w => w.name === 'Goularte').send(msg)
    } else {
  message.channel.createWebhook('Goularte', {
  avatar: 'https://i.imgur.com/6hO1jb6.jpg'}).then(w => {
  w.send(msg)
  })
 }
 })
}}