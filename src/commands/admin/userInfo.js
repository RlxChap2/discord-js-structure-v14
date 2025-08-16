const { SlashCommandBuilder, ChatInputCommandInteraction, Client, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Displays information about a user. (Admin Only)')
        .addUserOption((option) => option.setName('user').setDescription('The user to get information about.').setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

    /**
     * @param { ChatInputCommandInteraction } interaction
     * @param { Client } client
     */
    async execute(interaction, client) {
        const { options } = interaction;

        const user = options.getUser('user') || interaction.user;

        const member = await interaction.guild.members.fetch(user.id);

        const roles = member.roles.cache
            .filter((role) => role.id !== interaction.guild.id)
            .map((role) => role)
            .join(', ');

        const joinedAt = member.joinedAt.toUTCString();

        const embed = new client.embeds.baseEmbed()
            .setTitle(`${user.tag}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .addFields({ name: 'ID', value: `${user.id}` }, { name: 'Joined At', value: `${joinedAt}` }, { name: 'Roles', value: `${roles}` });

        await interaction.reply({ embeds: [embed] });
    },
};
