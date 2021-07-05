let age = document.getElementById('age');

function showUser(surname, name) {
  alert(`Пользователь ${surname, name}, его возраст: ${this.value}`); 
  console.log(this);
}

let show = showUser.bind(age, 'Иванов', 'Иван');
show();