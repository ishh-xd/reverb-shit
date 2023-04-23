const {
Client,
Collection,
GatewayIntentBits,
  ButtonBuilder,
 ButtonStyle,
   EmbedBuilder,ActionRowBuilder,
  Partials,
} = require("discord.js");

const client = new Client({intents: [
  GatewayIntentBits.Guilds], shards: "auto"})




client.on("ready",()=>{
console.log("💀✨🥀")
})

client.on("interactionCreate",async(interaction)=>{
await interaction?.deferReply()
await interaction?.channel?.send({
embeds:[
new EmbedBuilder()
  .setTitle("Error")
  .setColor(`#ff0080`)
.setDescription("Reverb is not working properly. My owner's account was termed by discord and is no more.\nWe've brought up a new music bot for you all. **MoE** the perfect music bot for you. [Click here to invite/add MoE in your server.](https://discord.com/oauth2/authorize?client_id=1074176927247630356&permissions=8&scope=bot)")
]
})
})

client.login(process.env.token)
