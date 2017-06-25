const basic = require("./basicCard")
const cloze = require("./ClozeCard")

// let card = new basic.BasicCard("whats 2+2", "4")
// let testCard = basic.BasicCard("test case 2", "yep it works");
// console.log(card.front, card.back)
// console.log(testCard.front, testCard.back);


let card = new cloze.ClozeCard("George Washington was the first president of the United States.", "George Washington")
let testCard = cloze.ClozeCard("George Washington was the first president of the United States.", "George Washington")

console.log(card.partial, card.fullText, card.cloze);
console.log(testCard.partial, testCard.fullText, testCard.cloze);
