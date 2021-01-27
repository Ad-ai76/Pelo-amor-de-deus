const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../../config.json')

module.exports = {
	config: {name: 'shard', aliases: ['sharding']},
	run: async (client, message, args) => {
  const shardembed =  new Discord.MessageEmbed()
	.setTitle(' Kobato - Shards ')
	.setColor('#FF00C2')
  .setDescription(`> <:bot_discord:789506342229639188> **Servidor na Shard:** \`${message.guild.shard.id}\`
  > <:bot_discord:789506342229639188> **Servidores: ** \`${client.guilds.cache.size} Servidores\`
  > <a:botping:765315050227105802> **Ping:** \`${message.guild.shard.ping} ms\`
  > <:bot_user:789507028568899645> **Usuários:** \`${client.users.cache.size} usuários\``)
	message.channel.send(shardembed)
}}