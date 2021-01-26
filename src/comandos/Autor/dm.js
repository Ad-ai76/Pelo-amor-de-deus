const Discord = require('discord.js')
const config = require('../../../config.json')
module.exports = {
	config: {name: 'dm'},
	run: async (client, message, args) => {

    if (!['585505421544914969'].some(a => message.author.id === a)) return message.reply('Apenas desenvolvedores podem utilizar esse comando!')

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.reply(`Você não mencionou um usuário`);

    if (user.id === message.author.id) {
      return message.reply("Você não pode manda mensagem para si mesmo")
    }  
    if(user.id === message.guild.owner.id) {
      return message.reply("Você não pode manda mensagem para o dono do servidor")
    }
    if (message.mentions.users.first().bot) {
      return message.reply("Você não pode manda mensagem para um bot")
    }
    if (!args.slice(1).join(" "))
      return message.reply("Você não expecificou sua mensagem");
    
      const embed = new Discord.MessageEmbed()
      .setDescription(args.slice(1).join(" "))
      .setColor(config.color)
      .setFooter(`Requisitado Por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    
      user.user.send(embed)
      .catch(() => message.channel.send("Não posso enviar mensagens na dm dele!"))
      .then(() => message.author.send(`Enviei uma mensagem para ${user.user.tag}`));
  },
};