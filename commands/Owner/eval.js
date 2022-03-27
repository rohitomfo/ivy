const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client()

exports.aliases = ["eval"];
exports.run = async (client, message, args) => {
        if (message.author.id !== '583236393606840320')
        if (message.author.id !== '879029147467403285')  return
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "Teri Maa Chor Ke Gai Thi Ya Tera baap"
            );
          }
          message.channel.send(output, {
            code: "js"
          });
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "ERROR");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
};