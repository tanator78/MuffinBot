const Commands = require('./commands')

module.exports = class GG extends Commands{

    static match(message){
        console.log('GG command used')
        return message.content.startsWith('!gg')
    }

    static action(message){
        message.reply(`Ca marche pas très bien ce truc c'est fortement dommage`)
    }
}