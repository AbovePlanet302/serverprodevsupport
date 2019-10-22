const Discord = require("discord.js");

const fs = require("fs");

const economy = require('../utils/economy.js')


module.exports.run = async (bot, message, args) => {

  let recipitant = message.mentions.users.first();
  let recipitantCoins = economy.getCoins(recipitant.id)
  let userCoins = economy.getCoins(message.author.id)
  let amount = Math.floor(args[1]);




  if(isNaN(amount)) return message.reply("You did not enter an amount to pay.")
  if(amount <= 0) return message.reply("You need to pay atleast 1 coin.")
  if(userCoins < amount) return message.reply("you do not have enough coins.");
  
  economy.setCoins(recipitant.id, recipitantCoins+amount)
  economy.setCoins(message.author.id, userCoins-amount)

  message.channel.send(`<@${message.author.id}> payed <@${recipitant.id}> ${amount} coins.`)

}



module.exports.help = {

  name: "pay"

}
