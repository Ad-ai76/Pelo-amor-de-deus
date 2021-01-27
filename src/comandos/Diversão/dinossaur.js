const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    config: { name: 'dinossaur', aliases: ['dinossauro']},
    run: async (client, message, args) => {

let image = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const canvas = Canvas.createCanvas(500, 500)
const ctx = canvas.getContext("2d")

const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/740633160085405845/769654545517117480/20201024_171221.jpg");
 ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.strokeRect(0, 0, canvas.width, canvas.height);

ctx.beginPath()
ctx.arc(182, 180, 150, 0, Math.PI * 2, true)
ctx.closePath()
ctx.clip()

const avatar = await Canvas.loadImage(image.displayAvatarURL({ dynamic: false, format: "png" }))
ctx.drawImage(avatar, 195, 115, 110, 110)

const final = new Discord.MessageAttachment(canvas.toBuffer(), "dinossaur.png")
 
message.channel.send(`${message.author}`, final)
    }
}