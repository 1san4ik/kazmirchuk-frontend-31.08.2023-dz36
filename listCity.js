const listCityDelivery = [
  '',
  'Київ',
  'Харків',
  'Дніпро',
  'Одеса',
  'Запоріжжя',
  'Львів',
  'Кривий Ріг',
  'Миколаїв',
  'Маріуполь',
  'Вінниця',
  'Херсон',
  'Полтава',
  'Чернігів',
  'Черкаси',
  'Суми',
  'Хмельницький',
  'Житомир',
  'Кропивницький',
  'Рівне',
  'Чернівці',
  'Тернопіль',
  'Івано Франківськ',
  'Луцьк',
  'Ужгород',
]

const selectCity = document.querySelector('#selectCity')
const cityOptions = listCityDelivery.forEach((elem) => {
  const city = document.createElement('option')
  city.value = elem
  city.innerText = elem
  selectCity.appendChild(city)
})

export { cityOptions }
