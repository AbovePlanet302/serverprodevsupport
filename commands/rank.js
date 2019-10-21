const Discord = require("discord.js");
let rank = require("../ranks.json");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!rank[message.author.id]){
    rank[message.author.id] = {
      rank: "**None**",
      coins: 0
    };
  }

  let uRank = rank[message.author.id].rank;
  let uCoins = coins[message.author.id].coins;


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
