const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const config = require('../../../config.json')

module.exports = {
	config: { name: 'userinfo', aliases: ['infouser'] },
	run: async (client, message, args) => {
    
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online": status = "🟢 | Online";
                break;
            case "dnd": status = "🔴 | Não Pertubar";
                break;
            case "idle": status = "🟠 | Ausente";
                break;
            case "offline": status = "⚪ | Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setColor(config.color)
            .setTitle(`<a:botflor:767034940453290045> Informações do(a) **${user.user.username}**`)
            .setDescription(`
            > ${config.verificado} **Nome** 
            »» \`${user.user.tag}\`
            > <:bot_id:789503518300962856> **ID**
            »» \`${user.user.id}\`
            
            > <a:botocupation:769704631558340628> **Status**
            »» \`${status}\`

            > <:botcalendario:767041655739121684> **Criada em**
            »» \`${moment(user.user.createdAt).format('dddd, DD [de] MMMM [de] YYYY á HH [atrás] (DD/MM/YYYY)')}\`
            > <:botcalendario:767041655739121684> **Entrou em**
            »» \`${moment(user.joinedAt).format('dddd, DD [de] MMMM [de] YYYY á HH [atrás] (DD/MM/YYYY)')}\`
            
            > **🖼️ Avatar**
            »» [\`Clique para baixar\`](${user.user.displayAvatarURL({ dynamic: true, format: "png",})})`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))

        await message.channel.send(embed)
    }
}