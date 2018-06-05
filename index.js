const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Youtube = require('./commands/youtube')
const Play = require('./commands/play')
const GG = require('./commands/goodgame')
const Overwatch = require('./commands/overwatch.js')
const fs = require('fs')
let data = fs.readFileSync('./token.txt')

/*******************************************************
à faire ici, array qui récupere l'ensemble des commandes
dans le dossier puis itérer dessus et leur donner le chemin du fichier correspondant.
*******************************************************/

//commandes
bot.on('message', function(message){
    if(message.content === '!help'){
        message.reply(trim(` **[!goo][*recherche*]**  || Réalise un recherche google
                        **[!yt][*recherche*]**   || Réalise un recherche youtube `))
    }

    Google.parse(message) ||
    Youtube.parse(message) ||
    Play.parse(message) ||
    GG.parse(message) ||
    Overwatch.parse(message)

});

bot.login(data.toString())
