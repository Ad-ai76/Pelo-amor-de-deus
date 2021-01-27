const Discord = require('discord.js')
const config = require('../../../config.json')

module.exports = {
	config: {name: 'coinflip'},
	run: async (client, message, args) => {
  
  const resultados = [`<:bot_cara:789258328400199720> | ${message.author}, Deu cara`, 
  `<:bot_coroa:789258328219451403> | ${message.author}, Deu Coroa`]
  const resultado = Math.floor((Math.random() * resultados.length));
  
  message.channel.send(`**${resultados[resultado]}**`)
    }
}