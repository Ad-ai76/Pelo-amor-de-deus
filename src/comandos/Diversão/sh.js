

//message.reply(`${messagesToClear.size} ${(quantidade > 1) ? "mensagens foram apagadas" : "foi apagada"} deste canal por ${message.author}! ${oldMessages} ${(oldMessages > 1) ? "não puderam ser apagadas, pois foram enviadas" : "não pôde ser apagada, pois foi enviada"} há mais de 14 dias!`)
//   }).catch ((err) => console.log(err))

    const jimp = require('jimp');
    const Discord = require('discord.js')
    const config = require('../../../config.json');
    
    module.exports = {
        config: { name: 'sh' },
        run: async (client, message, args) => {
        
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    
        const avatar = await jimp.read(user.displayAvatarURL({format: "png"}));
        const background = await jimp.read('https://i.imgur.com/0QLom5e.png')
        const mask = await jimp.read('https://i.imgur.com/uewoXkq.png')
        const fonte = await jimp.loadFont(jimp.FONT_SANS_16_WHITE)
        
        avatar.resize(120, 120)
        avatar.mask(mask)
        
        background.print(fonte, 120, 38, `${user.tag}`)
        background.composite(avatar, 5, 0).write('badge.png')
        
        message.channel.send(``, {files: ['badge.png']})
      }
    }