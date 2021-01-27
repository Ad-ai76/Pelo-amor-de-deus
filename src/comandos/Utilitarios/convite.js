const Discord = require("discord.js");
const config = require('../../../config.json');

module.exports = {
	config: {name: 'convite'},
	run: async (client, message, args) => {

    const iconbot = message.client.user.displayAvatarURL({ dynamic: true, format: "png",})
    const nomebot = message.client.user.username
    const prefix = config.prefix

    var embed = new Discord.MessageEmbed()

    .setTitle(`Quer me adicionar em seu servidor? escolha as opções`)
    .setDescription(`
    <a:botflor:767034940453290045> Informações:
    ${config.cor}Prefixo: \`${prefix}\`
    ${config.cor}Comandos: \`${client.commands.size}\`
    ${config.cor}Ping do Bot: \`${Math.round(client.ws.ping)} MS\`

    ${config.verificado} **Escolha as permissões que deseja no convite**
    ${config.cor} [**Sem permissão**](https://discord.com/oauth2/authorize?client_id=${config.id}&scope=bot&permissions=0)
    ${config.cor} [**Administrador**](https://discord.com/oauth2/authorize?client_id=${config.id}&scope=bot&permissions=8)
    ${config.cor} [**Principais**](https://discord.com/oauth2/authorize?client_id=${config.id}&scope=bot&permissions=805314622)
    ${config.cor} [**Todas**](https://discord.com/oauth2/authorize?client_id=${config.id}&scope=bot&permissions=2146958847)
    `)
    .setFooter(`Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png",}))
    .setColor(config.color)
    message.reply(embed)
}
}