const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      new MessageEmbed()
        .setDescription("**You must Join a voice channel before using this command!**")
         .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("ff0084")
    );

  let queue = message.client.queue.get(message.guild.id);

  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Master Volume Controller",
          "https://cdn.discordapp.com/attachments/886040351318626306/898179330897760276/Purple_and_Pink_Vintage_Retro_Offline_Twitch_Profile_Picture_2.png"
        )
        .setColor("ff0084")
         .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setDescription("**Current volume is " + queue.volume + " **")
    );

  if (args[0] > 100)
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Master Volume Error",
          "https://cdn.discordapp.com/attachments/886040351318626306/898179330897760276/Purple_and_Pink_Vintage_Retro_Offline_Twitch_Profile_Picture_2.png"
        )
         .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("ff0084")
        .setDescription("**Volume cannot exceed 100 :x: **")
    );

  queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  queue.volume = args[0];
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Master Volume Controller",
        "https://cdn.discordapp.com/attachments/886040351318626306/898179330897760276/Purple_and_Pink_Vintage_Retro_Offline_Twitch_Profile_Picture_2.png"
      )
       .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("ff0084")
      .setDescription("**Volume set to " + args[0] + "**")
  );
};
