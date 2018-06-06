const Commands = require('../commands')
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
        console.log(tag[1]+"-"+tag[2])
        let output = overwatch.getProfile(platform, region, tag[1], (obj) => {
            
            console.log(obj)

        message.channel.send({ 
            embed: {
                color: 3447003,
                description: "https://overwatchtracker.com/profile/pc/global/" + obj.username+"-"+btag[1],
                author: {
                    name: obj.username+"#"+btag[1],
                    icon_url: obj.portrait
                  },
                thumbnail:{
                    url: obj.competitive.rank_img
                },
                fields: [
                    {
                        name: "**Niveau : **",
                        value: obj.level + "\n",
                        inline: true
                    },
                    {
                        name: "**Rating : **",
                        value: obj.competitive.rank + "\n",
                        inline: true
                    },
                    {
                        name: "**Temps de jeu QP : **",
                        value: obj.playtime.quickplay + "\n",
                        inline: true
                    },
                    {
                        name: "**Parties gagnées QP: **",
                        value: obj.games.quickplay.won + "\n",
                        inline: true
                    }
                ],
            }
        })
    })}
}