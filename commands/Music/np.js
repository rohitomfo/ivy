const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send("You must Join a voice channel before using this command!");
    
     let queue = message.client.queue.get(message.guild.id); if (!queue)
      return message.channel.send(
      new MessageEmbed()
        .setFooter(message.member.displayName,        message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("ff0084")
        .setDescription(":x: **There are no songs playing in this server**")
    );
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Now Playing",
        "https://cdn.discordapp.com/attachments/886040351318626306/898179330897760276/Purple_and_Pink_Vintage_Retro_Offline_Twitch_Profile_Picture_2.png"
      )
      .setTimestamp()
      .setColor("ff0084")
      .setDescription(
        queue.queue[0].name +
          " Requested By: " +
          "<@" +
          queue.queue[0].requested +
          ">"
      )
      .setThumbnail(queue.queue[0].thumbnail)
      .setFooter("There are " + queue.queue.length + " songs in queue")
  );
};
