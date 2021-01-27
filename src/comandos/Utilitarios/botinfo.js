const Discord = require('discord.js')
const moment = require('moment');
moment.locale('pt-BR');
const config = require("../../../config.json")
const prefix = config.prefix

module.exports = {
	config: {name: 'botinfo'},
	run: async (bot, message, args) => {

    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

  let uptime = `${days.toFixed()} Dia(s), ${hours.toFixed()} Hora(s)`;
  let botguild = bot.guilds.cache.size.toLocaleString();
  let botuser = bot.users.cache.size.toLocaleString();
  let botcreated = moment(bot.user.createdAt).format('LL');

  const embed = new Discord.MessageEmbed()
  embed.setTitle(`<a:botflor:767034940453290045> Informações da ${bot.user.username}`)
  embed.setDescription(`> <:Pink_Cadeado:770304704923566150> **Prefix:**
  »» \`${prefix}\`
  > <:bot_user:789507028568899645> **Total de Usuários:** 
  »» \`${bot.users.cache.size}\`
  > <:botcanakk:771503918668447764> **Total de Canais:** 
  »»\`${bot.channels.cache.size}\`
  > ${config.pasta} **Total de Comandos:** 
  »» \`${bot.commands.size}\`
  > ${config.verificado} **Total de Servidores:**
  »» \`${botguild}\`

  > <:botstar:765937806236975134> **Total de Shard:**
  »» \`${bot.shard.count}\`

  > <:bot_owner:789508784628170772> **Dono:**
  »» **<@!585505421544914969> & <@!753391188400406652>**
  > <:lang_js:771508653588348958> **Linguagem:**
  »» \`JavaScript\`
  > <:botrelogio2:767042464040615937> **Bot online á:** 
  »» \`${uptime}\`
  > <:botcalendario:767041655739121684> **Bot criado em:** 
  »» \`${moment(bot.user.createdAt).format('L')}\``)
  .setColor(config.color)
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
  message.channel.send(embed)
}
}