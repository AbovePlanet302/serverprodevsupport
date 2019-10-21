
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

    .setTitle("Help System")

    .setColor(0xffffff)


    .addField("!help", "!help")
    .addField("!prefix", "!prefix (prefix)")
    .addField("!ping", "!ping")
    .addField("!info", "!info")
    .addField("!level", "!level")
    .addField("!kick", "!kick @user (reason)")
    .addField("!clear", "!clear (amount)")
    .addField("!ban", "!ban @user (reason)");



    message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "help"

}