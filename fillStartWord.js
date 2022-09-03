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
//module.exports = fillStartWord
console.log(fillStartWord("js","beginner"));
console.log(fillStartWord("first","firststep"));
console.log(fillStartWord("first",null));