const Discord = require("discord.js");
const economy = require("../utils/economy.js")

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do this.");

  if(!message.mentions.users.first()) return message.reply("You did not mention a user.")
  
  economy.setCoins(message.mentions.users.first().id, 0);
  message.channel.send(message.mentions.users.first().username + " now has 0 coins.")
  

}

module.exports.help = {
  name: "reset"
}
