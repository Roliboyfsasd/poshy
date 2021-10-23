const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "Szerver kezelős",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("Nincs jogod!");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Adj meg egy csatornát!")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Belépú csatorna beállítva! ${channel}`)
  }
}