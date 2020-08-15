const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.author.id !== "717463357095149638") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Sunucu ID'si girmelisin.`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'idgo',
  description: 'It is secret bro .p',
  usage: 'invite'
};