const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
	config: {name: 'tobecontinued'},
	run: async (client, message, args) => {

  let perfeito = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.join(" ")) || message.author;

    const canvas = Canvas.createCanvas(300, 300);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage(perfeito.displayAvatarURL({format: "jpg"}));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const background2 = await Canvas.loadImage("https://i.imgur.com/pGM0Nuz.png");
    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);

    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const final = new Discord.MessageAttachment(canvas.toBuffer(), "tobecontinued.png");

    message.channel.send(`${message.author}`, final)
    }
}