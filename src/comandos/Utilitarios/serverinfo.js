const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
const fs = require('fs');
const config = require('../../../config.json');

module.exports = {
	config: {name: 'serverinfo', aliases: ['infoserver']},
	run: async (client, message, args) => {
    
    let embed = new Discord.MessageEmbed()
    let autor = message.author.displayAvatarURL({ dynamic: true, format: "png",})
    let bots = message.guild.members.cache.filter((mem) => mem.user.bot === true).size;
    let online = message.guild.members.cache.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.cache.filter(a => a.presence.status == "offline").size;
    const chats = message.guild.channels.cache.filter(c => c.type === 'text').size;
    const voice = message.guild.channels.cache.filter(c => c.type === 'voice').size;

    embed.setTitle(`${message.guild.name}`)
    embed.setColor(config.color)
    embed.setDescription(`
    > <:bot_discord:789506342229639188> **Servidor**
    »» \`${message.guild.name}\`
    > <:bot_id:789503518300962856> **ID**
    »» \`${message.guild.id}\`
    > 👑 **Posse** 
    »» \`${message.guild.owner.user.tag}\`

    > <a:botTexto:765305753627131934> **Canais**
    »» <a:botTexto:765305753627131934>\`${chats}\`
    »» 🔊\`${voice}\`

    > <:botcalendario:767041655739121684> **Criado em**
    »» \`${moment(message.guild.createdAt).format('dddd, DD [de] MMMM [de] YYYY á HH [atrás] (DD/MM/YYYY)')}\`
    > <:botcalendario:767041655739121684> **Você entrou**
    »» \`${moment(message.member.joinedAt).format('dddd, DD [de] MMMM [de] YYYY á HH [atrás] (DD/MM/YYYY)')}\`

    > <:bot_user:789507028568899645> **Membros (${message.guild.memberCount})**
    »» <:botonline:769701732128129074> - \`${online}\`
    »» <:botocupado:769701732111482890> - \`${ocupado}\`
    »» <:botausente:769701731763224617> - \`${ausente}\`
    »» <:botoffline:769701732120657980> - \`${offline}\`
    »» <:botbot:769701732052631562> - \`${bots}\`
    `)
    embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true, format: "png",}))
    embed.setFooter(`Requisitado por: ${message.author.tag}`, `${autor}`)
    message.channel.send(embed)
  }
}