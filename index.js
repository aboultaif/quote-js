const fs = require('node:fs');
const data = fs.readFileSync('quotes.txt', 'utf8')
const randomQuote = data.split("\n")

let index = randomQuote.indexOf("")
while (index !== -1) {
    if (index > -1) { // only splice array when item is found
        randomQuote.splice(index, 1); // 2nd parameter means remove one item only
      }
    index = randomQuote.indexOf("")
}

let num = Math.floor(Math.random() * randomQuote.length)
let quote = randomQuote[num]

console.log(quote)