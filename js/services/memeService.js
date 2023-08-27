'use strict'

const STORAGE_KEY = 'memeDB'

var gImgs = [{ id: 1, url: 'imgs1/1.jpg', kewords: ['funny', 'person'] },
{ id: 2, url: 'imgs1/2.jpg', kewords: ['dog', 'cute'] },
{ id: 3, url: 'imgs1/3.jpg', kewords: ['cute', 'baby'] },
{ id: 4, url: 'imgs1/4.jpg', kewords: ['cat', 'cute'] },
{ id: 5, url: 'imgs1/5.jpg', kewords: ['baby', 'cute', 'angry'] },
{ id: 6, url: 'imgs1/6.jpg', kewords: ['funny', 'person'] },
{ id: 7, url: 'imgs1/7.jpg', kewords: ['funny', 'baby'] },
{ id: 8, url: 'imgs1/8.jpg', kewords: ['funny', 'person'] },
{ id: 9, url: 'imgs1/9.jpg', kewords: ['funny', 'baby'] },
{ id: 10, url: 'imgs1/10.jpg', kewords: ['funny'] },
{ id: 11, url: 'imgs1/11.jpg', kewords: ['funny'] },
{ id: 12, url: 'imgs1/12.jpg', kewords: ['angry'] },
{ id: 13, url: 'imgs1/13.jpg', kewords: ['funny'] },
{ id: 14, url: 'imgs1/14.jpg', kewords: ['angry'] },
{ id: 15, url: 'imgs1/15.jpg', kewords: ['angry'] },
{ id: 16, url: 'imgs1/16.jpg', kewords: ['funny'] },
{ id: 17, url: 'imgs1/17.jpg', kewords: ['funny'] },
{ id: 18, url: 'imgs1/18.jpg', kewords: ['funny'] }]

var gKeyWordSearchCountMap = { 'funny': 11, 'cat': 1, 'baby': 4, 'person': 3, 'angry': 4, 'cute': 4, 'dog': 1 }
var gMeme = _createMeme()

console.log('gMeme', gMeme)

function _createMeme(imgId = 1, lineIdx = 1, txt = 'empty') {
    return {
        selectedImgId: imgId,
        selectedLineIdx: lineIdx,
        lines: [
            {
                txt: txt,
                size: 50,
                color: 'black',
                familyFont: 'Arial'
            }
        ]
    }
}

function getMeme() {
    return gMeme
}

function getColor() {
    return gMeme.lines[0].color
}
function getFontSize() {
    return gMeme.lines[0].size
}

function getImgs() {
    return gImgs
}

function getFamilyFont() {
    return gMeme.lines[0].familyFont
}

function saveMemeToStorage() {
    var savedMemes = getMemeFromStorage()

    if (savedMemes === null) {
        savedMemes = []
    }

    savedMemes.push(gMeme)
    saveToStorage(STORAGE_KEY, savedMemes)
    console.log('saveee', savedMemes)
}

function getMemeFromStorage() {
    return loadFromStorage(STORAGE_KEY)
}

function getSavedMemeById(imgId) {
    var savedMemes = getMemeFromStorage()
    var foundMeme = savedMemes.find(meme => meme.selectedImgId === imgId)
    return foundMeme || null
}