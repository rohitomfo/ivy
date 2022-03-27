const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite IVY | Made by Varexa",
        "https://cdn.discordapp.com/attachments/886040351318626306/898179330897760276/Purple_and_Pink_Vintage_Retro_Offline_Twitch_Profile_Picture_2.png"
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor("ff0084")
      .setTimestamp()
      .setDescription(
        "https://discord.com/api/oauth2/authorize?client_id=895903123292434472&permissions=8&scope=bot"

      



      )
  );
};
