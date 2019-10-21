const Discord = require("discord.js");
let rank = require("../ranks.json");
let economy = require("../utils/economy.js")
console.log("test");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!rank[message.author.id]){
    rank[message.author.id] = {
      rank: "**None**",
      coins: 0
    };
  }

  let uRank = rank[message.author.id].rank;
  let uCoins = economy.getCoins(message.author.id)


  let coinEmbed = new Discord.RichEmbed()
  .setTitle("User Information")
  .setColor(0xffffff)
  .addField("Staff Rank", uRank )
  .addField("Coins ", uCoins)
  .setFooter('Searched User') //Add a footer
  .setTimestamp() //Timestamp the footer

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "info"
}
