
const Discord = require("discord.js");

const botconfig = require("../botconfig.json");

const red = botconfig.red;

const green = botconfig.green;

const orange = botconfig.orange;

const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {

    message.delete();

    if(args[0] == "help"){

      message.reply("Usage: !report <user> <reason>");

      return;

    }



    let reportEmbed = new Discord.RichEmbed()

    .setTitle("Bot Offline")

    .setColor(0xffffff)
    .setTimestamp()



    bot.channels.get("635578627978821672").send(reportEmbed);



}



module.exports.help = {

  name: "offline"

}