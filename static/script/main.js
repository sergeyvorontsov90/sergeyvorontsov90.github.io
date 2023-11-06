let mainInd = 0;//индикатор нажатия кнопки - основное бронирование
let guestInd = 0;//индикатор нажатия кнопки - добавчное бронирование
let guestPaidIndNext = 0;//индикатор нажатия кнопки - платный гость
let guestFreeIndNext = 0;//индикатор нажатия кнопки - бесплатный гость
let ekoPress = 0;//индикатор нажатия кнопки - сотрудник эко-системы
let partnerPress = 0;//индикатор нажатия кнопки - университет и партнеры
let staffType;//индикатор нажатия кнопки - триггер сотрудник эко системы или университет и патрнеры
let pogranInd = 0//индикатор нажатия кнопки - пограничники
let outSourceInd = 0//индикатор нажатия кнопки - аутсорс
let objectInd = 0//Тригер нажатия объектов проживания


lib.addEventListener("mouseover", function () {//наведение на справочник
  lib.classList.add("border");
});

lib.addEventListener("mouseout", function () {//наведение на справочник
  lib.classList.remove("border");
});

function moverOn() {//наведение на кнопки
  const buttons = document.querySelectorAll(".button");
  for (let item of buttons) {
    item.addEventListener("mouseover", function () {
      item.classList.add("buttonMove");
    });
  }
}

function moverOff() {//наведение на кнопки
  const buttons = document.querySelectorAll(".button");
  for (let item of buttons) {
    item.addEventListener("mouseout", function () {
      item.classList.remove("buttonMove");
    });
  }
}

moverOn();
moverOff();

//первая группа кнопок

mainReserv.onclick = function () {//основное бронирование
  if (guestInd === 1) {
    guestInd = 0;
    document.querySelector("#btnGroupGuest").remove();
    document.querySelector('#additionalReserv').classList.remove('buttonPress')

  }
  if (guestPaidIndNext == 1 || guestFreeIndNext == 1) {
    document.querySelector("#resultStaff").remove();
    guestPaidIndNext = 0;
    guestFreeIndNext = 0;
  }
  if (mainInd === 0) {
    mainInd = 1;
    section.insertAdjacentHTML("beforeend", paidGuestType);
  }
  document.querySelector('#mainReserv').classList.add('buttonPress')
  moverOn();
  moverOff();
};

additionalReserv.onclick = function () {//добавочное бронирование
  if (mainInd === 1) {
    mainInd = 0;
    document.querySelector("#btnPaidType").remove();
    pogranInd = 0
    outSourceInd = 0
    ekoPress = 0
    partnerPress = 0
    objectInd = 0
  document.querySelector('#mainReserv').classList.remove('buttonPress')

    zeroing ()
  }

  if (guestInd === 0) {
    guestInd = 1;
    section.insertAdjacentHTML("beforeend", guestType);
  }
  document.querySelector('#additionalReserv').classList.add('buttonPress')
  moverOn();
  moverOff();
};

//вторая группа кнопок (добавочные)


function paidGuestFunc() {//платный гость
    if (guestFreeIndNext == 1) {
    document.querySelector('#freeGuest').classList.remove('buttonPress')
    section.querySelector("#resultStaff").remove();
    guestFreeIndNext = 0;
  }
  if (guestPaidIndNext == 0) {
   document.querySelector('#paidGuest').classList.add('buttonPress')
    guestPaidIndNext = 1;
    section.insertAdjacentHTML("beforeend", guestPaidButtonPress);
  }
}

function freeGuestFunc() {//бесплатный гость
  if (guestPaidIndNext == 1) {
    document.querySelector('#paidGuest').classList.remove('buttonPress')
    section.querySelector("#resultStaff").remove();
    guestPaidIndNext = 0;
  }
  if (guestFreeIndNext == 0) {
    document.querySelector('#freeGuest').classList.add('buttonPress')
    guestFreeIndNext = 1;
    section.insertAdjacentHTML("beforeend", guestFreeButtonPress);
  }
}

//вторая группа кнопок (основные)


function ekoSis() {//сотрудник эко-системы
  staffType = 0;

  if (objectInd == 1) {
    document.querySelector('#oblectReultList').remove()
    objectInd = 0
    zeroing()
    zeroingClass ()
  }

  if (pogranInd == 1) {
    document.querySelector('#pogran').classList.remove('buttonPress')
    pogranInd = 0
    document.querySelector('#pogranResult').remove()
  }

  if (outSourceInd == 1) {
    document.querySelector('#outSource').classList.remove('buttonPress')
    outSourceInd = 0
    document.querySelector('#outSourceResult').remove()
  }

  if (partnerPress == 1) {
    document.querySelector('#staffGuest').classList.add('buttonPress')
    document.querySelector('#anotherGuest').classList.remove('buttonPress');
    return
  }

  if (ekoPress == 1) {
    document.querySelector('#staffGuest').classList.add('buttonPress')
    document.querySelector('#anotherGuest').classList.remove('buttonPress');
    return;
  }

  if (ekoPress == 0) {
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', objectType)
    ekoPress = 1;
  }
  document.querySelector('#staffGuest').classList.add('buttonPress')
  moverOn();
  moverOff();
}

function partnerSis() {//университет и партнеры
  staffType = 1;

  if (objectInd == 1) {
    document.querySelector('#oblectReultList').remove()
    objectInd = 0
    zeroing()
    zeroingClass ()
  }

  if (pogranInd == 1) {
    document.querySelector('#pogran').classList.remove('buttonPress')
    pogranInd = 0
    document.querySelector('#pogranResult').remove()
  }

  if (outSourceInd == 1) {
    document.querySelector('#outSource').classList.remove('buttonPress')
    outSourceInd = 0
    document.querySelector('#outSourceResult').remove()
  }

  if (ekoPress == 1) {
    document.querySelector('#anotherGuest').classList.add('buttonPress')
    document.querySelector('#staffGuest').classList.remove('buttonPress')
    return
  }

  if (partnerPress == 1) {
    document.querySelector('#anotherGuest').classList.add('buttonPress')
    document.querySelector('#staffGuest').classList.remove('buttonPress')
    return;
  }

  if (partnerPress == 0) {
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', objectType)
    partnerPress = 1;
  }
  document.querySelector('#anotherGuest').classList.add('buttonPress')
  moverOn();
  moverOff();
}

function pogranPress () {//пограничники

  if (objectInd == 1) {
    document.querySelector('#oblectReultList').remove()
    objectInd = 0
    zeroing()

  }

  if (outSourceInd == 1) {
    document.querySelector('#outSource').classList.remove('buttonPress')
    outSourceInd = 0
    document.querySelector('#outSourceResult').remove()
  }

  if (pogranInd == 1) {
    return } 

  if (partnerPress == 1 || ekoPress == 1) {
     document.querySelector('#btnGroupPaid').remove()
     document.querySelector('#anotherGuest').classList.remove('buttonPress')
     document.querySelector('#staffGuest').classList.remove('buttonPress')
    }

  if (pogranInd == 0) {
    pogranInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', pogranResultList)
  }
  document.querySelector('#pogran').classList.add('buttonPress')
  ekoPress = 0
  partnerPress = 0
}

function outSourcePress () {//аутсорс

  if (objectInd == 1) {
    document.querySelector('#oblectReultList').remove()
    objectInd = 0
    zeroing()

  }

  if (pogranInd == 1) {
    document.querySelector('#pogran').classList.remove('buttonPress')
    pogranInd = 0
    document.querySelector('#pogranResult').remove()
  }
  if (outSourceInd == 1) {
    return }

  if (partnerPress == 1 || ekoPress == 1) {
    document.querySelector('#btnGroupPaid').remove()
    document.querySelector('#anotherGuest').classList.remove('buttonPress')
    document.querySelector('#staffGuest').classList.remove('buttonPress')
  }

  if (outSourceInd == 0) {
    outSourceInd = 1
    document.querySelector('#btnPaidType').insertAdjacentHTML('beforeend', outSourceResultList)
  }
  document.querySelector('#outSource').classList.add('buttonPress')
  ekoPress = 0
  partnerPress = 0
}

function zeroing () {
  sigmaAInd = 0
  sigmaBInd = 0
  gammaInd = 0
  deltaInd = 0
  alfaInd = 0
  parusInd = 0
  arizonaInd = 0
  hostelInd = 0
  
}

function zeroingClass () {
  document.querySelector('#sigmaA').classList.remove('buttonPress')
  document.querySelector('#sigmaB').classList.remove('buttonPress')
  document.querySelector('#gamma').classList.remove('buttonPress')
  document.querySelector('#delta').classList.remove('buttonPress')
  document.querySelector('#alfa').classList.remove('buttonPress')
  document.querySelector('#parus').classList.remove('buttonPress')
  document.querySelector('#arizona').classList.remove('buttonPress')
  document.querySelector('#hostel').classList.remove('buttonPress')
}