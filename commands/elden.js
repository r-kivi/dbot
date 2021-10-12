const { SlashCommandBuilder } = require('@discordjs/builders');

mjs = require('moment')
mjs.locale('fi')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('er')
		.setDescription('Days until the release of the highly anticipated video game Elden Ring'),
	async execute(interaction) {
        const today = mjs()
        let er = mjs("21012022", "DDMMYYYY")
        er.add(1, "h")
        let dur = mjs.duration(er.diff(today))
        
        const days = Math.floor(dur.asDays())
        dur.subtract(mjs.duration(days, "days"))

        const hours = Math.round(dur.asHours())

        reply = String(days) + " days and " + String(hours) + " hours until Elden Ring release!"
		await interaction.reply(reply);
	},
};