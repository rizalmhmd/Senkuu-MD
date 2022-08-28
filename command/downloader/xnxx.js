let { monospace, isUrl } = require('../../lib/function')

module.exports = {
  name: "xnxxdl",
  alias: ["xnxxdl"],
  category: "downloader",
  isOwner: false,
  isGroup: false,
  isBotAdmin: false,
	isAdmin: false,
  async run({msg, conn},{map, args, q}){
const { sender, from, command } = msg
switch(command){
if(!q) throw "𝙼𝚊𝚜𝚞𝚔𝚊𝚗 𝚕𝚒𝚗𝚔"
	  try {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xnxx", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        conn.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    }          
        } catch (e){
	    global.error(msg.command, e, msg)
	  }
	}
}
