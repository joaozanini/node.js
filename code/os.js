const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

// sys update time 
console.log(`The sys uptime is ${os.uptime()} seconds`)