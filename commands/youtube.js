const Commands = require('./commands')

module.exports = class Youtube extends Commands{

    static match(message){
        console.log('Youtube command used')
        return message.content.startsWith('!yt')
    }

    static action(message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.youtube.com/results?search_query=' + args.join('+'))
    }
}