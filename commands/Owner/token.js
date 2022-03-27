const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');



  exports.run = async (bot, message, args) => {
  if (message.author.id !== '583236393606840320') 
  if (message.author.id !== '879029147467403285')
  if (!message.guild.me.hasPermission("ADMINISTRATOR"))
   {
      
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));
  }
  {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`IVY Token`)
    .setDescription('```ODY1Nzc2NTMzMzA0NDkwMg==.WolwWe.tIXkVxbH0PpVs3UPkkoGAwt44PE``` \n ||**APNI MUUMNY BECH NE AYA HAI KYA BEHN KE LODE**|| ')
    .setColor("ff0084")
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    
    message.channel .send(embed)
    
  
  }
};