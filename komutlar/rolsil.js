const Discord = require('discord.js');

exports.run = function(client, message) {
  message.guild.roles.forEach(r=> r.delete())
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 4 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'rol-sil',//Komutun adı (Komutu girerken lazım olucak)
  description: 'ROLLERİ SİLER',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
