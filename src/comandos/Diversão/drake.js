const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
	config: {name: 'drake'},
	run: async (client, message, args) => {

const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const canvas = Canvas.createCanvas(500, 500)
const ctx = canvas.getContext("2d")

const background2 = await Canvas.loadImage("https://cdn.discordapp.com/attachments/763732611469803541/769261138579423242/14272003-61c2-4360-9982-ac2517680b0b.png");
 ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);

ctx.strokeRect(0, 0, canvas.width, canvas.height);

ctx.beginPath()
ctx.arc(345, 160, 175, 0, Math.PI * 2, true)
ctx.closePath()
ctx.clip()

const morreCajita = await Canvas.loadImage(user.displayAvatarURL({ dynamic: false, format: "png", size: 1024}));
ctx.drawImage(morreCajita, 252, 100, 200, 200)

const final = new Discord.MessageAttachment(canvas.toBuffer(), "drake.png")

message.channel.send(`${message.author}`, final)
    }
}
