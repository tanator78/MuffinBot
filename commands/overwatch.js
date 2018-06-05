const Commands = require('./commands')
const overwatch = require('overwatch-api')
const platform = 'pc'
const region = 'eu'



module.exports = class Overwatch extends Commands{

    static match(message){

        return message.content.startsWith('!ow')

    }

    static action(message){

        let tag = message.content.split(' ')
        let btag = message.content.split('-')

        let output = overwatch.getProfile(platform, region, tag[1], (obj) => {
            console.log(obj)
            message.channel.send("**Statistiques pour : **"+obj.username+"#"+btag[1]+"\n**Niveau : **"+obj.level+"\n**Classement : **"+obj.competitive.rank+"\n**Victoires en partie rapide : **"+obj.games.quickplay.won+"\n**Vicoitres en partie classée : **"+obj.games.competitive.won, {
                file: obj.portrait
            }, 
        );
    })}
}