function log (...message) {
    let ID = Math.floor(Math.random * 10000) + 10000
    let now = Date.now()
    console.log(message)
    let obj = {
        content: message,
        id: ID,
        createdTimestamp: now 
    }

    //shitty promise handling LOL
    return new Promise((resolve, reject) => {
        try {
            resolve(obj)
        } catch (err) {
            reject('There was an error LOL')
            console.log(err)
        }
    })
}

module.exports = log
