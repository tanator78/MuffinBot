const concat = require('concat-stream')
const strawpoll = require('strawpoll')
const Commands = require('./commands')

module.exports = class Strawpoll extends Commands{

    static match(message){
        return message.content.startsWith('!poll')
    }

    static action(message){

        let args = message.content.split('|')
        console.log(args)
        message.content.split(' ')
        
        
        var stream = strawpoll({
            title: 'My first poll',
            options: [
              'wow',
              'awesome',
              'amazing',
              'nice'
            ],
            multi: false,
          });
          
          stream.pipe(concat(function(stream) {
            console.log(stream);
          }));

    }
}