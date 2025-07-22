const SteamUser = require("steam-user");

const client = new SteamUser();

client.logOn({
  accountName: process.env.STEAM_USERNAME,
  password: process.env.STEAM_PASSWORD,
});

client.on("loggedOn", () => {
  console.log("✅ Logged into Steam!");
  client.setPersona(SteamUser.EPersonaState.Online);
});
