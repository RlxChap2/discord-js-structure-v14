# Discord Bot Structure

A lightweight structure for building Discord.js bots with a clean command and event system.
This repo is set up to keep dependencies fresh using Dependabot, so you can focus on writing features instead of chasing updates.

---

## Features

-   📂 Organized project structure (commands, events, handlers, utils).
-   ⚡ Slash command support with auto-registration.
-   🧩 Easy event handling (drop in files, they load automatically).
-   🗄️ MongoDB integration out of the box.
-   🔐 Centralized error handling.
-   🔄 Automatic dependency updates via Dependabot.

---

## Project Structure

```
src/
├── commands/
│   ├── public/
│   │   └── ping.js
│   └── admin/
│       └── userInfo.js
├── events/
│   ├── client/
│   │   └── ClientReady.js
│   │   └── InteractionCreate.js
│   └── server/
│       └── GuildCreate.js
├── utils/
│   └── helpers.js
├── models/
│   └── Data.js
├── index.js
└── .env
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/RlxChap2/discord-js-structure-v14.git
cd discord-bot-structure-v14
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```
BOT_TOKEN=your-bot-token-here
MONGO_URI=your-mongodb-uri
```

### 4. Run the bot

```bash
npm start
```

---

## Updating Dependencies

This repo uses **Dependabot** to automatically check for npm package updates.
You’ll see pull requests whenever new versions are available. Merge them to stay up to date.

---

## Contributing

Pull requests are welcome. If you’d like to suggest a feature or report a bug, please open an issue first.

---

## License

This project is licensed under the [MIT License](/LICENSE).
