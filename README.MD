# This is a shitty side project because I was bored.
## Installation
#### With NPM 
`npm install dumblogger`
#### With yarn
`yarn add dumblogger`
## Usage
No promise
```js
const log = require('dumblogger')
log('Hello, World!', true) // If set to true it will also log the obj that contains all logged messages and their IDS for that process.
```
Promise
```js
const log = require('dumblogger')
log('Hello, World!').then(logged => console.log(logged)) //output: { id: Number, message: String, time: Date }
```
# Expect literally nothing from this
