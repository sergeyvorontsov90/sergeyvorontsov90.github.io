const lib = document.querySelector("#lib");
const mainReserv = document.querySelector("#mainReserv");
const additionalReserv = document.querySelector("#additionalReserv");
const section = document.querySelector("#section");
const depart = document.querySelector('#depart')

const guestType =
  '<div id="btnGroupGuest"><div class="conteiner" id="guestType"><h3>Выберете тип гостя</h3></div>\
<div class="containerButton" id="containerButtonObject">\
<button role ="button" class="button" id="paidGuest" onClick = "paidGuestFunc ()">Платный</button role ="button">\
<button role ="button" class="button" id="freeGuest" onClick = "freeGuestFunc ()">Бесплатный</button></div>';

const objectType =
  '<div id="btnGroupPaid"><div class="conteiner" id="placementObject"><h3>Выберете объект проживания</h3></div>\
  <div class="containerButton" id="containerButtonObject">\
  <button role="button" class="button" id="sigmaA" onClick = "sigmaAPress ()">Сигма А</button>\
  <button role="button" class="button" id="sigmaB" onClick = "sigmaBPress ()">Сигма Б</button>\
  <button role="button" class="button" id="gamma" onClick = "gammaPress ()">Гамма</button>\
  <button role="button" class="button" id="delta" onClick = "deltaPress ()">Дельта</button>\
  <button role="button" class="button" id="alfa" onClick = "alfaPress ()">Альфа</button>\
  <button role="button" class="button" id="parus" onClick = "parusPress ()">Парусная</button>\
  <button role="button" class="button" id="arizona" onClick = "arizonaPress ()">Аризона</button>\
  <button role="button" class="button" id="hostel" onClick = "hostelPress ()">Хостел С</button></div></div>';

const guestPaidButtonPress =
  '<div id="resultStaff" class="staffResultPaid"><ul >\
  <li>Тариф GuestShareRoStaff</li>\
  <li>Укажите дату заезда и выезда</li>\
  <li>Не забудьте проставить договор как у основного гостя (в случае если договор отсутствует - то не надо)</li>\
  <li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
  <li>Не забудьте проставить поставить галочку "не занимает место"</li>\
  <li>Присвойте номер и поправьте детализацию на Физ.Лицо</li>\
  <li>В комментарии укажите - "Гость", если это онлайн заявка - добавьте ее номер</li></ul></div>';

const guestFreeButtonPress =
'<div id="resultStaff" class="staffResultPaid"><ul >\
<li>Тариф гостей сотрудников эко-системы ShareRoStaff</li>\
<li>Тариф членов семьи пограничников - ShareRoStaff (меняем детализацию на договор), для гостей - GuestShareRoPOGRANICHNIK</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Не забудьте проставить договор, как у основного гостя (в случае если договор отсутствует - то не надо)</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Не забудьте проставить поставить галочку "не занимает место"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите степень родства, если это онлайн заявка - добавьте ее номер</li></ul></div>';

const paidGuestType =
'<div id="btnPaidType"><div class="conteiner" id="paidguestType"><h3>Выберете тип сотрудника</h3></div>\
<div class="containerButton" id="containerButtonObject">\
<button role ="button" class="button" id="staffGuest" onClick = "ekoSis ()">Сотрудник Эко-системы</button role ="button">\
<button role ="button" class="button" id="anotherGuest" onClick = "partnerSis ()">Университет и партнеры</button>\
<button role ="button" class="button" id="pogran" onClick = "pogranPress ()">Пограничники</button>\
<button role ="button" class="button" id="outSource" onClick = "outSourcePress ()">Аутсорс</button></div>';

const pogranResultList = '<div id="pogranResult" class="staffResultPaid"><ul >\
<li>Выберите отель - Сигма Б или Сигма Г</li>\
<li>Тариф  POGRANICHNIK (койко-место) или POGRANICHNIK (номер)</li>\
<li>Укажите дату заезда и выезда (01.01.2025)</li>\
<li>Не забудьте проставить договор</li>\
<li>Блок не указываем</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф</li></ul></div>'

const outSourceResultList = '<div id="outSourceResult" class="staffResultPaid"><ul >\
<li>Если это "Мегафудс" - то тариф Рабочий/Партнер (койко-место) или  Рабочий/Партнер (номер стандарт) для Хостел С//Спец/НаучныйСотруд/Руковод/Рабочий/Партнер(номер стандарт), Спец/НаучныйСотруд/Руковод/Партнер(койко-место) для Сигма Б</li>\
<li>Если это другой аутсорс - то тариф HOUSEAS на Аризона</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Если это "Премьер-Ивент" не забудьте проставить договор (в зависимости от объекта)</li>\
<li>Если это другой аутсорс - договор не ставим</li>\
<li>Блок не указываем</li>\
<li>Тип гостя - сотрудник парнера</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, название организации</li></ul></div>'

const sigmaAResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Сигма А Стафф</li>\
<li>Тариф СПЕЦИАЛИСТ/НАУЧНЫЙ СОТРУДНИК/РУКОВОДИТЕЛЬ(ЗА НОМЕР) или СПЕЦИАЛИСТ/НАУЧНЫЙ СОТРУДНИК/РУКОВОДИТЕЛЬ(КОЙКО-МЕСТО)</li>\
<li>Если это учитель Лицея - то тариф УЧИТЕЛЬ(Без уборки), УЧИТЕЛЬ+РЕБЕНОК(Без уборки), УЧИТЕЛЬ+ДЕТИ(Без уборки)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Не забудьте проставить договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const sigmaAResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Сигма А Стафф</li>\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф SPETSLONGRO</li>\
<li>Если это сотрудник ММЦ - то тариф PartnerStaff(за номер) на Сигма А</li>\
<li>Если это сотрудник Росгвардии - то тариф Rosguards (за номер), Rosguards (койко-место) на Сигма А</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'

const sigmaBResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Сигма Б</li>\
<li>Тариф Спец/НаучныйСотруд/Руковод/Рабочий/Партнер(номер стандарт), Спец/НаучныйСотруд/Руковод/Партнер(койко-место), \
Спец/НаучныйСотруд/Руковод/Партнер(апарт/кух.зона)</li>\
<li>Если это учитель Лицея - то тариф Учитель, Учитель + ребенок, Учитель + дети</li>\
<li>Если это куратор - то тариф Куратор (за счет Фонда), Куратор/Младший воспитатель (койко-место)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Если сотрудник УК ИНТЦ - договор не ставим, для сотрудников других компаний - договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const sigmaBResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Сигма Б</li>\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф LONGRO</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'

const gammaResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Тариф SOTRUDNIKI(Без уборки), SOTRUDNIKI(Улучшенной планировки без уборки) => для сотрудников в 17 корпусе</li>\
<li>Если это учитель Лицея - то тариф УЧИТЕЛЬ(Без уборки), УЧИТЕЛЬ+РЕБЕНОК(Без уборки), УЧИТЕЛЬ+ДЕТИ(Без уборки)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Не забудьте проставить договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const gammaResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф SPETSLONGRO//Для сотрудников в 17 корпусе - "Улучшенной пларнировки"</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'

const deltaResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Тариф SOTRUDNIKI2021</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Не забудьте проставить договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>В комментарии укажите категорию, номер СЗ, тариф</li></ul></div>'

const deltaResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф SPETSLONGRO</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>В комментарии укажите категорию, тариф, оплата на стойке</li></ul></div>'

const alfaResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Если отели Морской, Парковый, Заповедный, Прибрежный - то тарифы Сотрудники/Льготный тариф \
(Фонд, УК ИНТЦ, Культурный центр, Лицей, ИИ), Сотрудники/Базовый тариф \
(Медиадом, Фонд ИНТЦ, Сириус.ИС, ЦОС, РК Строй, НИЦ, УМК)</li>\
<li>Если отель staff - то тарифы Сотрудники/Стафф (за номер), Сотрудники/Стафф (койко-место)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Не забудьте проставить договор компании с тегом КЦ</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>В комментарии укажите категорию, номер СЗ, тариф</li></ul></div>'

const alfaResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ, для партнеров - Сотрудники/Льготный тариф</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Укажите актуальный блок</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>В комментарии укажите категорию, тариф, оплата на стойке</li></ul></div>'

const parusResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Парусная</li>\
<li>Тариф Сотрудники (АК "Парусная")</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Еслт это сотрудник Фонда - договор не ставим, для сотрудников других компаний - договор компании с тегом FOND</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const parusResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Парусная</li>\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф LONGRO</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'

const arizonaResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Аризона</li>\
<li>Тариф Рабочий/Партнер (номер стандарт), Рабочий/Партнер (койко-место)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Если сотрудник УК ИНТЦ - договор не ставим, для сотрудников других компаний - договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const arizonaResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Аризона</li>\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф LONGRO</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'

const hostelResultEcoList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Хостел</li>\
<li>Тариф Рабочий/Партнер (номер стандарт), Рабочий/Партнер (койко-место)</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Если сотрудник УК ИНТЦ - договор не ставим, для сотрудников других компаний - договор компании с тегом UK</li>\
<li>Если гость на постоянное проживание - поставьте автопродление ежегодно</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Укажите тип гостя: если это сотрудник Фонда - то "Сотрудник", для других - это "Сотрудник партнера"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, номер СЗ, тариф</li></ul></div>'

const hostelResultPartnerList = '<div id="oblectReultList" class="staffResultPaid"><ul >\
<li>Выберите отель - Хостел</li>\
<li>Для сотрудников Университета - тариф LONGRO/УНИВЕРСИТЕТ//Для партнеров тариф LONGRO</li>\
<li>Укажите дату заезда и выезда</li>\
<li>Договор не ставим, если только не указано в заявке</li>\
<li>Автопродление ежегодно - не ставим</li>\
<li>Блок не указываем</li>\
<li>Проставьте актуальную категорию номера</li>\
<li>Если это сотрудник Университета - укажите тип гостя - "Сотрудник партнера"</li>\
<li>если АФТ (партнеры) - тип гостя "Представитель органов власти федеральной территории «Сириус»"</li>\
<li>Присвойте номер</li>\
<li>В комментарии укажите номер, тариф, оплата на стойке</li></ul></div>'
