const Commands = require('./commands')
const YoutubeStream = require('ytdl-core')
module.exports =  class Play extends Commands{


    static match(message){
        return message.content.startsWith('!play')
    }

    static action(message){
        let VC = message.guild.channels
            .filter(function(channel){ return channel.type === 'voice'})
            .first()
        let args = message.content.split(' ')

        VC
            .join()
            .then(function (connection) {
                try{
                    let stream = YoutubeStream(args[1])
                    stream.on('error', function(){
                        message.reply('Cette vidéo n\'existe pas')
                        connection.disconnect()
                    })
                    connection
                        .playStream(stream)
                        .on('end', function(){
                        connection.disconnect()
                    })
                }
                catch(e){

                }

            })
    }
}