import { cityOptions } from './listCity.js'

const divForm = document.querySelector('.divForm')
const btnReg = document.querySelector('.btn1')
btnReg.addEventListener('click', formReg)

function formReg() {
  divForm.style.visibility = 'visible'
}

let users = {}
function User(firstName, lastName, birth, gender, city, adress, languages) {
  this.firstName = firstName
  this.lastName = lastName
  this.birth = birth
  this.gender = gender
  this.city = city
  this.adress = adress
  this.languages = languages
}

const btnSave = document.querySelector('.btn2')
btnSave.addEventListener('click', saveForm)

function createId(users) {
  return Object.keys(users).length
}

function saveForm() {
  const firstName = document.getElementById('inputFirstName').value
  const lastName = document.getElementById('inputLastName').value
  const birth = document.getElementById('inputBirth').value
  const radioButtons = document.getElementsByName('gender')
  let gender
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      gender = radioButtons[i].value
      break
    }
  }
  const city = document.getElementById('selectCity').value
  const adress = document.getElementById('adress').value
  const checkboxes = document.querySelectorAll('input[name="lang"]')
  const languages = []
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      languages.push(checkbox.id)
    }
  })

  const user = new User(
    firstName,
    lastName,
    birth,
    gender,
    city,
    adress,
    languages
  )

  const userId = 'User' + createId(users)
  users[userId] = user
  divForm.style.visibility = 'hidden'
  btnReg.style.display = 'none'

  const dataTable = document.querySelector('.dataTable')
  dataTable.style.display = 'block'
  const tbody = dataTable.getElementsByTagName('tbody')[0]

  const rows = tbody.querySelectorAll('tr')
  rows.forEach((row) => {
    tbody.removeChild(row)
  })

  const keyMap = {
    firstName: "Ім'я: ",
    lastName: 'Прізвище: ',
    birth: 'День народження: ',
    gender: 'Стать: ',
    city: 'Місто: ',
    adress: 'Адреса: ',
    languages: 'Мови: ',
  }
  const valueMap = {
    inputLangUkr: 'Українська',
    inputLangEng: 'Англійська',
    inputLangGerm: 'Німецька',
    inputNextlang: 'Інші мови',
  }

  for (let key in user) {
    if (user.hasOwnProperty(key)) {
      let visualKey = keyMap[key] || key
      let value = valueMap[key] || user[key]
      if (value === undefined || value === '') {
        value = ''
      }
      if (Array.isArray(languages) && key === 'languages') {
        let languagesText = languages
          .map((lang) => valueMap[lang] || lang)
          .join(', ')

        let row = tbody.insertRow()
        let cell1 = row.insertCell(0)
        cell1.innerHTML = 'Мови: '

        let cell2 = row.insertCell(1)
        cell2.innerHTML = languagesText
      } else {
        let row = tbody.insertRow()

        let cell1 = row.insertCell(0)
        cell1.innerHTML = visualKey

        let cell2 = row.insertCell(1)
        cell2.innerHTML = value
      }
    }
  }
  const btnClose = document.createElement('button')
  btnClose.classList.add('btn3')
  btnClose.innerText = 'Закрити'
  document.body.appendChild(btnClose)
  btnClose.addEventListener('click', () => {
    dataTable.style.display = 'none'
    btnClose.style.display = 'none'
    btnReg.style.display = 'block'
  })
}
