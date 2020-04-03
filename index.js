console.log("Bot listo!")
const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'Hola') {
        message.channel.send('Holi');
    }
    if(message.content == 'Putos todos') {
        message.channel.send('Puta tu gfa');
    }
    /*if(message.content == 'Conejos') {
        message.channel.send('6057_KnucklesSmug');
    }*/
    if(message.content == 'Conejos') {
        message.channel.send('https://tenor.com/tehe.gif')
    }
});

bot.login('NjkwNjkwNDU4MTExOTY3MjMy.XoewdQ.vY88uoGrgCyDFNrMjGNf5RmVVFU')