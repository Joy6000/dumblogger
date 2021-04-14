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
log('Hello, World!') // Output: Hello, World!    Literally just console.log, it's barebones as of now.
```
Promise
```js
const log = require('dumblogger')
log('Hello, World!').then(logged => console.log(logged)) //output: { content: String, id: Number, createdTimestamp: Date } 
```
# Expect literally nothing from this
