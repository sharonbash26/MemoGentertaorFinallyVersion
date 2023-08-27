'use strict'


var gCurrLang = 'en'

const gTrans = {
    title: {
        en: 'Meme Generator',
        he: 'מחולל הממים'
    },
    btnSavedProjects: {
        en: 'Saved Memes',
        he: 'הפרויקטים השמורים שלך'
    },
    back: {
        en: 'Back To Gallery ←',
        he: 'חזרה לגלריה'
    },
    download: {
        en: 'Download',
        he: 'הורדה'
    },
    uploadBtnImg: {
        en: 'Share on Facebook',
        he: 'שיתוף התמונה בפייסבוק'
    },
    addStikerBtn: {
        en: 'Add Sticker',
        he: 'הוספת סטיקר'
    },
    shareWhatsUpBtn: {
        en: 'Share on Whatsup',
        he: 'שיתוף תמונה בווצאפט'
    },
    enterTextPlaceHolder: {
        en: 'Enter text',
        he: 'הקלד טקסט כאן',
    },
    selectFont: {
        en: 'Select Font:',
        he: 'בחר פונט',
    },
    saveBtn: {
        en: 'Save',
        he: 'שמור'
    },
    file: {
        en: 'Choose File',
        he: 'בחר קובץ',
    },
    toggleStickerBtn:{
        en:'Close Sticker Menu',
        he:'סגור תפריט סטיקרים'
    }
}

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'
    let transTxt = transMap[gCurrLang]
    if (!transTxt) transTxt = transMap.en
    return transTxt
}

function doTrans() {
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        console.log('transKey:', transKey)
        const transTxt = getTrans(transKey)
        console.log('transTxt:', transTxt)
        if (el.placeholder) el.placeholder = transTxt
        else el.innerText = transTxt
    })
}

function setLang(lang) {
    gCurrLang = lang
}