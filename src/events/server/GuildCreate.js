const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildCreate,

    /**
     * Fired when the bot joins a new guild
     * @param {import('discord.js').Guild} joinedGuild
     */
    async execute(joinedGuild) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const saudiTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Riyadh',
        });

        const logTime = `⌚ (UTC: ${Date.now()}, SA: ${saudiTime})`;

        console.log(`✅ Successfully joined allowed guild: ${joinedGuild.name} (${joinedGuild.id}) ${logTime}`);
    },
};
