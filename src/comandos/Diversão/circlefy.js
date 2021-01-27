const Discord = require('discord.js')
const Canvas = require('canvas')

module.exports = {
    config: { name: 'circlefy', aliases: ['fycircle'] },
    run: async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

const canvas = Canvas.createCanvas(200, 200)
const ctx = canvas.getContext("2d")

ctx.strokeRect(0, 0, canvas.width, canvas.height)

ctx.beginPath()
ctx.arc(100, 100, 75, 0, Math.PI * 2, true)
ctx.closePath()
ctx.clip()

const avatar = await Canvas.loadImage(user.displayAvatarURL({ dynamic: false, format: "png", size: 1024}))
ctx.drawImage(avatar, 25, 25, 150, 150)

const end = new Discord.MessageAttachment(canvas.toBuffer(), "circlefy.png")
 
message.channel.send(`${message.author}`, end)

    }
}