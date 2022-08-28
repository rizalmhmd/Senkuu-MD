module.exports = {
  name: "anime",
  alias: ["anime"],
  category: "downloader",
  isOwner: false,
  isGroup: false,
  isBotAdmin: false,
	isAdmin: false,
  async run({msg, conn},{map, args, q}){
    const { sender, from, command } = msg
    switch(command){
      
      case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                xavior.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
          
        } catch (e){
	    global.error(msg.command, e, msg)
	  }
	}
}
