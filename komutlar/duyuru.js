const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    const mesaj = args.slice(0).join(' ');
   if (message.author.id !== "717463357095149638") return message.channel.send("⚠ | Bu Komutu Sadece Yapımcılar Kullana Bilir!")
    if(mesaj.length < 1) return message.reply("❌ Lütfen Bir Duyuru Mesajı Yaz!")
      try {
        message.guild.members.forEach(m=> {
         
        m.send(mesaj)
        console.log(`🔧 Duyuru ${m.user.tag} İsimli Kullanıcıya Gönderildi!`)
         
          }) 
        message.channel.send(`:v:  Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.:v:`);
          }
        catch(e) {
        return console.log(`⚠ Eksik Mesaj Gönderildi!`)
       
      } 
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm-duyuru","duyuru"],
  permLevel: 4
};

exports.help = {
  name: 'dm',
  description: 'Kullanıldığı Sunucudaki Tüm Üyelere Dm Den İstediğiniz Şeyi Gönderir!',
  usage: 'dm <duyuru-mesajın>'
};