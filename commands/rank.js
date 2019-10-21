const Discord = require("discord.js");
let rank = require("../ranks.json");
let economy = require("../utils/economy.js")
let xp = require("../xp.json")


module.exports.run = async (bot, message, args) => {
  //!coins
  if(!rank[message.author.id]){
    rank[message.author.id] = {
      rank: "**None**",
      coins: 0,
      xp: 0,
      level: 1
    };
  }

  let uRank = rank[message.author.id].rank;
  let uCoins = economy.getCoins(message.author.id)
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;


  let coinEmbed = new Discord.RichEmbed()
  .setTitle("User Information")
  .setColor(0xffffff)
  .addField("Staff Rank", uRank )
  .addField("Coins ", uCoins)
  .addField("Level ", curlvl, true)
  .addField("XP ", curxp, true)
  .setFooter('Searched User') //Add a footer
  .setTimestamp() //Timestamp the footer

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "info"
}
