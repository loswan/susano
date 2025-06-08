const fs = require('fs')

global.owner = "6283823030055" //owner number
global.footer = "Ryverz" //footer section
global.status = true //"self/public" section of the bot

global.lol = "";
global.mess = {
    owner: "KHUSUS OWNER RYVERZ!!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
