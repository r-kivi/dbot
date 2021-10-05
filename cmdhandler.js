mjs = require('moment')
mjs.locale('fi')

module.exports = {
    handle: function (command){
    arr = command.split(" ")
    if(arr[0] == "er") {return elden()}
}
}

elden = () => {return mjs("22012022", "DDMMYYYY").diff(mjs(), 'days')}

