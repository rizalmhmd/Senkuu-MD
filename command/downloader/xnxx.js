let { fetchUrl, isUrl } = require('../../lib/function')

module.exports = {
  name: "xnxxdl",
  alias: ["xnxxdl"],
  category: "downloader",
  isOwner: false,
  isGroup: false,
  isBotAdmin: false,
	isAdmin: false,
  async(killua, m, { prefix, command, text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xnxx", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        killua.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    }
          
        } catch (e){
	    global.error(msg.command, e, msg)
	  }
	}
}
