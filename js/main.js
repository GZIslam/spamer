var inputText = $('#inputText');
var inputNumber = $('#inputNumber');

function send(){
    var number = inputNumber.val();
    var text = inputText.val();
    var url = 'https://eu128.chat-api.com/instance142548/SendMessage?token=udla6ab93y2f30g9';
    var str = '';
    for(var i = 0; i < number.length; i++){
        if(number[i] == ' ') str+='';
        if(number[i] !== ',')str+=number[i];
        else{
            var data = {
                phone: str, // Телефон получателя
                body: text, // Сообщение
            };
            // Отправим запрос
            $.ajax(url, {
                data : JSON.stringify(data),
                contentType : 'application/json',
                type : 'POST',
                processData: false,
                success: function(data) {
                console.log(data);
            }
            });
            console.log(str);
            str = '';
        }
        if(i == number.length-1){
            var data = {
                phone: str, // Телефон получателя
                body: text, // Сообщение
            };
            // Отправим запрос
            $.ajax(url, {
                data : JSON.stringify(data),
                contentType : 'application/json',
                type : 'POST',
                processData: false,
                success: function(data) {
                console.log(data);
            }
            });
            console.log(str);
            str = '';
        }
    }
}

