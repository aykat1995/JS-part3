let age = document.getElementById('age');

function showUser(surname, name) {
  alert(`Пользователь ${surname, name}, его возраст: ${this.value}`); 
  console.log(this);
}

let show = showUser.bind(age, 'Иванов', 'Иван');
show();

//Задание 3.15

class Options {

  constructor(height, width, bg, fontSize, textALign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textALign = textALign; 
  }

  newDiv() {
    let div = document.createElement('div');
    div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textALign};`
    document.body.appendChild(div);
    div.textContent = 'Hello worrllldldd';
  }
}

let obj = new Options(300, 300, 'red', 22, 'center');
obj.newDiv();