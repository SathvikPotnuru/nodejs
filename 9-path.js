const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`System uptime is ${os.uptime()} seconds`)

const currenOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currenOS)