// Importing dependencies
require('dotenv/config');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const utils = require('./src/utils/helpers');

// Creating a new Discord client instance with proper intents and partials
const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

// Login to Discord using the token from environment variables
client.login(process.env.BOT_TOKEN);

// Handling events and commands through the utility functions
utils.handler(client);
utils.isError(client);
