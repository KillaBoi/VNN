module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  
  if (!message.author.id === 256137868513116162)
    return message.reply("You're being ratelimited.");

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  //message.channel.send(`Err 1034 Could not respond.`)
  cmd.run(client, message, args);
};