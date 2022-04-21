const Discord = require('discord.js'); //uses discord.js to run
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    ] });
    client.once('ready', () => {
    function leaguetimer(){   
        //console.log(client);
    client.guilds.cache.forEach(guild => { 
    const users = guild.members.cache.map(u => u.id)
    for(i0=0; i0<users.length; i0++){
    //let member1 = client.users.cache.get(users[i0]);
    (async () => {
    try{
    member = await guild.members.fetch(users[i0])
    //console.log(member)
    } catch (error) {
        return;
    }
    //console.log(member.presence)
    //if (member.bot == (true || 'true')) return;
    //console.log(member)
    //console.log(member.username)
        if(member.presence || member.presences){
            fs.appendFileSync('logs/presence.log', '| true ')
            for(i=0 ; i < member.presence.activities.length ; i++){
                let activitytimestamp = member.presence.activities[i].createdTimestamp//(new Date(member.presence.activities.createdAt)).getTime()
                //the milliseconds since jan 1 1970 when the activity started
                let rightnow = (new Date()).getTime() //current number of milliseconds since jan 1 1970
                let totaltimems = (rightnow - activitytimestamp) //calculate how long activity has been running for in milliseconds
                let totaltimes = totaltimems / 1000 //convert to seconds
                if(member.presence.activities[i].name == 'League of Legends' && totaltimes > 1800){
                    fs.appendFileSync('logs/presence.log', `\n${member.id} AKA ${member.username} has been playing league for ${totaltimes / 60} minutes!\n`) // saves it in logs
                    let user = member.presence.user
                    //console.log('')
                    user.send('You have been playing league for too long!') // sends a DM
                    member.ban({
                        reason: 'league player',
                        
                    })
                    .catch(error => {
                        message.reply(`I am unable to ban ${member.username}. `)
                    })
                }
                else {
            // do nothing
                }
            }
        } //if presence
        else {
            fs.appendFileSync('logs/presence.log', '| false ')
        }
    })()
    }
    //user.send('you have been playing league for too long!')
    
    })
    }
    
    let timer = 60*1000*30;
    leaguetimer();
    setInterval(leaguetimer, timer)//last value is minutes

    client.user.setPresence({ 
        activities: [{ 
            name: "!!!", 
            type: 'STREAMING', 
            url: 'https://youtube.com/saberstrkkdwmdr', 
        }], 
        status: `dnd`,
        afk: 'false'
        });
})
client.login('token') //replace with bot token
        /*       No switches?
        ⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
        ⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
        ⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
        ⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
        ⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
        ⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀*/
