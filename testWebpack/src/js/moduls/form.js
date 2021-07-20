function form() {
  let message = {
    loading: 'Идет загрузка',
    success: 'Ваши данные отправлены. Мы свяжемся с вами',
    failure: 'Что-то пошло нет так'
 }

 let form = document.getElementsByTagName('form'),
    //input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    for (let i = 0; i < form.length; i++) {
       form[i].addEventListener('submit', sendForm);
    }   
 
 function sendForm(event) {
    
    let input = this.getElementsByTagName('input');

    event.preventDefault();
    this.appendChild(statusMessage);
    let formData = new FormData(this);

    function postData(data) {
       return new Promise(function(resolve, reject) {

          let request = new XMLHttpRequest();         
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.addEventListener('readystatechange', function() {
             if (this.readyState < 4) {
                //statusMessage.innerHTML = message.loading;
                resolve();
             } else if (this.readyState == 4 && this.status == 200) {
                //statusMessage.innerHTML = message.success;
                resolve();
             } else //statusMessage.innerHTML = message.failure;
                reject();

          });
          
          request.send(data);
       }) //end promise

       let obj = {};

       formData.forEach(function(value, key){
          obj[key] = value;
       });

       let json = JSON.stringify(obj);
       request.send(json);  
          
    } //end postData    

    postData(formData)
       .then(() => statusMessage.innerHTML = message.loading)
       .then(() => statusMessage.innerHTML = message.success)
       .catch(() => statusMessage.innerHTML = message.failure)
       .then(() => clearInput);     
         
    function clearInput() {
       for (let i = 0; i < input.length; i++) {
       input[i].value = '';
       }
    };    
 };
}

module.exports = form;
