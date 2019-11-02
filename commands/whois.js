const { RichEmbed } = require("discord.js");


const { getMember, formatDate } = require("../functions.js");



module.exports = {

    name: "whois",

    aliases: ["who", "user", "info"],

    description: "Returns user information",

    usage: "[username | id | mention]",

    run: (client, message, args) => {

        const member = getMember(message, args.join(" "));



        // Member variables

        const joined = formatDate(member.joinedAt);

        const roles = member.roles

            .filter(r => r.id !== message.guild.id)

            .map(r => r).join(", ") || 'none';



        // User variables

        const created = formatDate(member.user.createdAt);



        const embed = new RichEmbed()

            .setFooter(member.displayName, member.user.displayAvatarURL)

            .setThumbnail(member.user.displayAvatarURL)

            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)



            .addField('**User Information:**', `${member.displayName}

            **> Name: ** ${member.displayName}
            **> ID: ** ${member.user.id}
            **> Joined At: ** ${joined}
            **> Fruor Ranks** ${roles}`, true)
            .addBlankField()

            .addField('**Group Information:**', `**> ID:** ${member.user.id}

            **> Fruor**: ${roles},true)

            

            .setTimestamp()
            .addBlankField()


        if (member.user.presence.game) 

            embed.addField('**Currently playing**', `**> Name:** ${member.user.presence.game.name}`);



        message.channel.send(embed);

    }

}

module.exports.help = {
    name: "info",
}
