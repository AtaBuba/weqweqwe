const Discord = require('discord.js');
exports.run = function(client, message) {
setInterval(function() {

message.channel.send(`**@everyone @everyone @everyone\n\nZirve Dediğiniz Tahtta Hep Kucakta Kaldınız**\n\nhttps://discord.gg/TjA6Tvn <@&728949357684195379>`);
},0)
};
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ever-spam',//Komutun adı (Komutu girerken lazım olucak)
  description: 'EVERYONE SPAMLAR',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kull
}