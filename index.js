var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Click To Redirect",
assets : {
large_image : "circleyt",
large_text : "Circle " // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Youtube" , url : "https://www.youtube.com/channel/UC_J5fE9By5khY2YkRp1kmxg"},{label :"Discord",url : "https://discord.gg/bx7e7xDAYS"}]
}
})
})
client.login({ clientId : "817070312789114960" }).catch(console.error);