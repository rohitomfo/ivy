const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      new MessageEmbed()
      .setDescription("**You must Join a voice channel     before using this command!**")
      .setColor("ff0084")
      
    );

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("I don't have permission to join the voice channel");

  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error("I don't have permission to speak in the voice channel");

  await channel.join();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("**247 is now enabled**")
       .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("ff0084")
  );
};
