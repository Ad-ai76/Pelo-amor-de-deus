const Discord = require("discord.js");
const Jimp = require("jimp");
const config = require('../../../config.json')

module.exports = {
	config: {name: 'wanted'},
	run: async (client, message, args) => {
    
    const embeduser = new Discord.MessageEmbed()
    embeduser.setTitle(`Procura-se`)
    embeduser.setDescription(`**<a:botconfig:765311159460823091> Como usar?** \n\`${config.prefix}wanted <usuário>\``)
    embeduser.addField(`\n<:botcanakk:771503918668447764> Exemplos`, `\`${config.prefix}wanted @mynameisgameover`)
    embeduser.setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: "png", }))
    embeduser.setTimestamp()
    embeduser.setColor(config.color)

    let GuildMember = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    message.channel.startTyping();

    let i1 = Jimp.read(GuildMember.displayAvatarURL({ format: "png", size: 2048 }));
    let i2 = Jimp.read("https://cdn.discordapp.com/attachments/469606974548344853/501026267798175756/aranuyr.png");

    Promise.all([i1, i2]).then((images) =>
    {
        images[0].resize(450, 442).quality(100);
        images[1].composite(images[0], 140, 354).quality(100).getBuffer(Jimp.MIME_PNG, (err, buffer) =>
        {
            if(err)
            {
                console.log("\x1b[31m*\x1b[0m Error creating \x1b[33m(Most Wanted)\x1b[0m meme: \x1b[31m" + err + "\x1b[0m");
            }

            message.channel.send(new Discord.MessageAttachment(buffer, "wanted.png")).then(() => message.channel.stopTyping(true)).catch(() => message.channel.stopTyping(true));
        });
    });
}
}