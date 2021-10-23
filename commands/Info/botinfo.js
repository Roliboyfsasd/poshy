const { MessageEmbed } = require('discord.js');
const os = require('os');

module.exports = {
	name: 'botinfo',
  aliases: ["bi"],
	category: 'Info',
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.setTitle('A bot információi')
			.setColor('#148111')
			.addFields(
				{
					name: '🌐 Szerverek',
					value: `${client.guilds.cache.size} szerveren van bent a bot.`,
					inline: true,
				},
				{
					name: '📺 Csatornák',
					value: `${client.channels.cache.size} csatornát figyel.`,
					inline: true,
				},
				{
					name: '👥 Szerver tagok',
					value: `${client.users.cache.size} tagot figyel`,
					inline: true,
				},
				{
					name: '⏳ Ping',
					value: `${Math.round(client.ws.ping)}ms`,
					inline: true,
				},
				{
					name: '🎢 Belépett ekkor',
					value: client.user.createdAt,
					inline: true,
				},
				{
					name: '🤖 Fejlesztők',
					value: `<@460705038864744460> <@708968955863105628>`,
					inline: true,
				},
				{
					name: '⚙ Verzió',
					value: `Programozói nyelv: JavaScript\nDiscord.js verzió száma: @12.5.3`,
					inline: true,
				},
			)
			.setFooter(`A parancsot lekérte: ${message.author.tag}`, message.author.displayAvatarURL());

		return message.channel.send(embed);
	},
};
