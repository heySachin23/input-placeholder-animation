const searchBox = document.getElementById('search-box')
let placeholder = "Search "
const speed = 200;
const keywords = ["'Animals'", "'Puzzles'", "'Football'"]
const totalWords = keywords.length

function type(wordIdx, charIdx) {
    if(wordIdx == totalWords) return;
    const currentWord = keywords[wordIdx]
    placeholder += currentWord.charAt(charIdx);
    searchBox.setAttribute('placeholder', placeholder);
    if(charIdx == currentWord.length) {
        setTimeout(() => remove(wordIdx, charIdx-1), speed);
    }
    else {
        setTimeout(() => type(wordIdx, charIdx+1), speed);
    }
}

function remove(wordIdx, charIdx) {
    placeholder = placeholder.slice(0,-1);
    searchBox.setAttribute('placeholder', placeholder);
    if(charIdx == 0) {
        setTimeout(() => type((wordIdx+1)%totalWords, 0), speed);
    }
    else {
        setTimeout(() => remove(wordIdx, charIdx-1), speed);
    }
}

type(0, 0)