const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    };

  let coinEmbed = new Discord.RichEmbed()
  .setTitle("User Information:")
  .setColor(random)
  .addField("Name: ", uRank )
  .addField("User ID: ", message.author.id)
  .addField("Online Status:  ", message.author.status)
  .addField("Joined Date: ", messge.author.guild.joinedAt)
  .setTimestamp() //Timestamp the footer

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "info"
}
