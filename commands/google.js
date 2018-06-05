const Commands = require('./commands')

module.exports = class Google extends Commands{

   static match(message){
       console.log('Google command used')
        return message.content.startsWith('!goo')
    }

   static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }
}