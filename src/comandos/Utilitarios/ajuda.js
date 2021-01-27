const Discord = require('discord.js');
const config = require('../../../config.json');
const help = require('../../../help.json');
const prefix = config.prefix

module.exports = {
    config: { name: 'ajuda', aliases: ['help']},
    run: async (client, message, args) => {

        const iconbot = message.client.user.displayAvatarURL({ dynamic: true, format: "png", })
        const nomebot = message.client.user.username

        const embed = new Discord.MessageEmbed()
            .setDescription(`${config.verificado} Ajuda da **${nomebot}**
    
    Olá sou **${nomebot}**
    Para qualquer duvida ou bugs entre no servidor de [**Suporte**](https://discord.com/invite/${config.invite})

    <a:botflor:767034940453290045> **Informações:**
    ${config.cor}Prefixo: \`${prefix}\`
    ${config.cor}Comandos: \`${client.commands.size}\`
    
    **<:bot_desenvolvedor:790984035974381638> » (Desenvolvedores)**
    **\`${help.desenvolvedores}\`**
    
    **🏷️ » (Utilidades)**
    **\`${help.utilidades}\`**
    
    **<:bot_staff:789526659665100811> » (Moderacao)**
    **\`${help.moderacao}\`**
    
    **<a:botelcome:767034688769359892> » (Diversao)**
    **\`${help.diversao}\`**

    **🤔 » (Info)**
    **\`${help.info}\`**

    **🔞 » (Hentai)**
    **\`${help.hentai}\`**

    **🎉 » (Giveaway)**
    **\`${help.giveaway}\`**
    `)
    .setColor(config.color)
        message.author.send(embed).catch(Boolean)

        const enviar = new Discord.MessageEmbed()
            .setTitle(`Olá`)
            .setColor(config.color)
            .setDescription(`<a:bot_correto:789529157662670929> | Enviei o comando no seu **privado**!\n\n**<a:botocupation:769704631558340628> Caso não tenha enviado, confira suas configurações é ative a opção**\n**\`Privacidade e Segurança » Permitir mensagens diretas de membros do servidor\`**`)
            .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))

        message.reply(enviar)
    }
}