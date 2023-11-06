let sigmaAInd = 0//индикатор кнопки - Сигма А
let sigmaBInd = 0//индикатор кнопки - Сигма Б
let gammaInd = 0//индикатор кнопки - Гамма
let deltaInd = 0//индикатор кнопки - Дельта
let alfaInd = 0//индикатор кнопки - Альфа
let parusInd = 0//индикатор кнопки - Парусная
let arizonaInd = 0//индикатор кнопки - Аризона
let hostelInd = 0//индикатор кнопки - Хостел

function sigmaAPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
      }

    if (sigmaAInd == 1) {
        return
    }

    if (staffType == 0 && sigmaAInd == 0) {
        sigmaAInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', sigmaAResultEcoList)
    document.querySelector('#sigmaA').classList.add('buttonPress')
    }

    if (staffType == 1 && sigmaAInd == 0) {
        sigmaAInd = 1
        document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', sigmaAResultPartnerList)
        document.querySelector('#sigmaA').classList.add('buttonPress')
    }
    objectInd = 1
}

function sigmaBPress () {
    
    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (sigmaBInd == 1) {
        return
    }

    if (staffType == 0 && sigmaBInd == 0) {
        sigmaBInd = 1
    document.querySelector('#sigmaB').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', sigmaBResultEcoList)
    }

    if (staffType == 1 && sigmaBInd == 0) {
        sigmaBInd = 1
        document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', sigmaBResultPartnerList)
       document.querySelector('#sigmaB').classList.add('buttonPress')
    }
    objectInd = 1
}

function gammaPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (gammaInd == 1) {
        return
    }

    if (staffType == 0 && gammaInd == 0) {
        gammaInd = 1
    document.querySelector('#gamma').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', gammaResultEcoList)
    }

    if (staffType == 1 && gammaInd == 0) {
        gammaInd = 1
    document.querySelector('#gamma').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', gammaResultPartnerList)
    }
    objectInd = 1  
}

function deltaPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (deltaInd == 1) {
        return
    }

    if (staffType == 0 && deltaInd == 0) {
        deltaInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', deltaResultEcoList)
    document.querySelector('#delta').classList.add('buttonPress')

    }

    if (staffType == 1 && deltaInd == 0) {
        deltaInd = 1
    document.querySelector('#delta').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', deltaResultPartnerList)
    }
    objectInd = 1
}

function alfaPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (alfaInd == 1) {
        return
    }

    if (staffType == 0 && alfaInd == 0) {
        alfaInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', alfaResultEcoList)
    document.querySelector('#alfa').classList.add('buttonPress')

    }

    if (staffType == 1 && alfaInd == 0) {
        alfaInd = 1
    document.querySelector('#alfa').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', alfaResultPartnerList)
    }
    objectInd = 1   
}

function parusPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (parusInd == 1) {
        return
    }

    if (staffType == 0 && parusInd == 0) {
        parusInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', parusResultEcoList)
    document.querySelector('#parus').classList.add('buttonPress')

    }

    if (staffType == 1 && parusInd == 0) {
        parusInd = 1
    document.querySelector('#parus').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', parusResultPartnerList)
    }
    objectInd = 1   
}

function arizonaPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (arizonaInd == 1) {
        return
    }

    if (staffType == 0 && arizonaInd == 0) {
        arizonaInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', arizonaResultEcoList)
    document.querySelector('#arizona').classList.add('buttonPress')

    }

    if (staffType == 1 && arizonaInd == 0) {
        arizonaInd = 1
    document.querySelector('#arizona').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', arizonaResultPartnerList)
    }
    objectInd = 1   
}

function hostelPress () {

    if (objectInd == 1) {
        document.querySelector('#oblectReultList').remove()
        objectInd = 0
        zeroing()
        zeroingClass ()
    }

    if (hostelInd == 1) {
        return
    }

    if (staffType == 0 && hostelInd == 0) {
        hostelInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', hostelResultEcoList)
    document.querySelector('#hostel').classList.add('buttonPress')

    }

    if (staffType == 1 && hostelInd == 0) {
        hostelInd = 1
    document.querySelector('#hostel').classList.add('buttonPress')
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', hostelResultPartnerList)
    }
    objectInd = 1  
}
