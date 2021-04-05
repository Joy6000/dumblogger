let allOBJ = {}
function log (message, show) {
    let ID = Math.floor(Math.random * 10000)

    used.push(ID)

    console.log(message)

    return new Promise((resolve, reject) => {
        consoleLog = {
            id: ID,
            message: message,
            time: new Date()
        }
        let count = Object.keys(allOBJ).length ? Object.keys(allOBJ).length : 0
        allOBJ[count] = consoleLog
          if (show) {
            console.log(allOBJ)
        }
        resolve(consoleLog)
    })

}

module.exports = log