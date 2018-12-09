const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "506776584741453824"; // ايدي السررفر
var channel = "506776770700247040";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**spam , spam , spam , spam , spam , spam , spam , spam ,  **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTA2NzQ4MTI2MjA4NTg5ODI0.Du7xPw.QlGHbwCsB1PAZMJjHUrZLYxLGf0");