const { Events, Client } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    /**
     * Executes when the bot is ready (logged in and fully operational).
     * @param { Client } client - The Discord client.
     */
    async execute(client) {
        try {
            const tableInformation = {
                name: client.user.tag,
                id: client.user.id,
                guilds: client.guilds.cache.size,
                users: client.users.cache.size,
                channels: client.channels.cache.size,
                commands: client.commands.size,
            };
            console.table(tableInformation);
        } catch (error) {
            console.error(error);
        }
    },
};
