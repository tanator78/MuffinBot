const Commands = require('./commands')
const Overwatch = require('overwatch-api')
const platform = 'pc'
const region = 'eu'



module.exports = class Overwatch extends Commands{

    static match(message){

        return message.content.startsWith('!ow')

    }

    static action(message){
        let tag = message.content.split(' ')
        console.log(Overwatch)
        Overwatch.getProfile(platform, region, tag, (json) => {
            console.log(json)
          })
    }
}