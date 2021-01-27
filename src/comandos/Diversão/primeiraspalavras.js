const Discord = require('discord.js')
var Jimp = require("jimp")
const config = require('../../../config.json')

module.exports = {
  config: { name: 'primeiraspalavras' },
  run: async (client, message, args) => {

    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Diga suas primeiras palavras`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}primeiraspalavras <mensagem>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}primeiraspalavras mamae`)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
      message.channel.send(embeduser)
    } else {
      if (message.content.split(' ').slice(1).join(' ').length > 50) {
        message.channel.send('Você ultrapassou o limite de 50 caracteres')
      } else {
        if (message.member.hasPermission('ATTACH_FILES')) {
          var authorMessage = message
          message.channel.send('🔍 | Processando...').then(message => {
            Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
              if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
              Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                var aguardeMessage = message
                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                  const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                  message.channel.send(attachment).then(message => {
                    aguardeMessage.delete()
                  })
                })
              })
            })
          })
        } else {
          message.channel.send('Eu preciso da permissão`ATTACH_FILES`')
        }
      }
    }
  }
}