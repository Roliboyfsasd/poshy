module.exports = (bot) => {
    const channelID = '901545015069782110' //belépő channel
    const targetChannelID = '901560809589702717' //Szabályzat, infó

    bot.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Kérlek olvasd el a szabályzatot!  <@${member.id}> üdv itt! Kérlek ${member.guild.channels.cache
        .get(targetChannelID)
        .toString()
    }`
    const channel = member.guild.channels.cache.get(channelID)
    channel.send(message)
    })
}