const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word==null||word==undefined){
    return undefined;
  }else if(word.startsWith(startWord)){
    return word;
  }else{
    return startWord+word;
  }
}
module.exports = fillStartWord
// console.log(fillStartWord("JS","beginner"));
// console.log(fillStartWord("first","firststep"));
// console.log(fillStartWord("1-2565-","Hello World"));
// console.log(fillStartWord("second",undefined));