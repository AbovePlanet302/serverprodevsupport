const Discord = require("discord.js");

const economy = require("../utils/economy.js")



module.exports.run = async (bot, message, args) => {



  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do this.");



  if(!message.mentions.users.first()) return message.reply("You did not mention a user.")

  

  economy.setCoins(message.mentions.users, "**Helper**");

  message.channel.send(message.mentions.users.first().username + " is now a Helper.")

  



}



module.exports.help = {

  name: "staff"

}
