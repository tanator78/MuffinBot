const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Youtube = require('./commands/youtube')
const Play = require('./commands/play')
const GG = require('./commands/goodgame')
const Overwatch = require('./commands/overwatch/overwatch.js')
const Strawpoll = require('./commands/strawpoll')
const fs = require('fs')
let data = fs.readFileSync('./token.txt')

/*******************************************************
à faire ici, array qui récupere l'ensemble des commandes
dans le dossier puis itérer dessus et leur donner le chemin du fichier correspondant.
*******************************************************/

//commandes
bot.on('message', function(message){
    if(message.content === '!help'){
        message.channel.send('**!ow pseudo-btag** *Infos du compte Overwatch*\n'
        +'**!goo recherche** *Effectue une recherche google*\n'
        +'**!yt recherche** *Effectue une recherche youtube*\n'
        +'**!play lien-youtube** *Rejoins le channel et lis la video*')
    }

    Google.parse(message) ||
    Youtube.parse(message) ||
    Play.parse(message) ||
    GG.parse(message) ||
    Overwatch.parse(message) ||
    Strawpoll.parse(message)

});

bot.login(data.toString())
