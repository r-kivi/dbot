const { SlashCommandBuilder } = require('@discordjs/builders');

mjs = require('moment')
mjs.locale('fi')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('er')
		.setDescription('Days until Elden Ring'),
	async execute(interaction) {
        const today = mjs()
        const er = mjs("21012022", "DDMMYYYY")
        let dur = mjs.duration(er.diff(today))
        
        const days = Math.round(dur.asDays())
        dur.subtract(mjs.duration(days, "days"))

        const hours = Math.floor(dur.asHours())

        reply = String(days) + " days and " + String(hours) + " hours until Elden Ring!"
		await interaction.reply(reply);
	},
};