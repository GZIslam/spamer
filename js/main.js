var inputText = $('#inputText');
var inputNumber = $('#inputNumber');

function send(){
    var number = inputNumber.val();
    var text = inputText.val();
    var url = 'https://api.chat-api.com/instance141771/sendMessage?token=s6vofxi4sfdcjlnt';
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

