const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'faustao'},
	run: async (client, message, args) => {
  
  if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS'))
    return message.reply('Eu não tenho permissão de `Gerenciar WeebHooks`')
  
  const resultados = ["Ô loco, bixo! Brincadeira! Esta fera aí, meu!", 
  "Ô loco, meu",
  "Erroooooou!",
  "Tanto no pessoal como no profissional",
  "Ô Lokinho, meu",
  "Você vai morrer :coffin:",
  "TÁ PEGANDO FOGO, BICHO!"
  ]
  const resultado = Math.floor((Math.random() * resultados.length));
  
  const imagens = ["https://i.imgur.com/PVOEeTl.jpg", "https://i.imgur.com/uakbzRk.jpg", "https://i.imgur.com/MQqaofw.jpg"]
  const imagem = Math.floor((Math.random() * imagens.length));

  message.channel.fetchWebhooks().then(webhooks => {
    if (webhooks.some(w => w.name === 'Faustão')) {
      webhooks.find(w => w.name === 'Faustão').send(resultados[resultado])
    } else {
  message.channel.createWebhook('Faustão', {
  avatar: `${imagens[imagem]}`}).then(w => {
  w.send(resultados[resultado])
  })
 }
 })
}
}