import $ from 'jquery'
$(document).ready(function() {
    $("#nav, #price, #title").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });




    //
    $('#send').click(function() {
        var email = $('#email').val();
        var name = $('#name').val();
        var message = $('#message').val();
        $.ajax({
            url: 'form.php',
            type: 'POST',
            cache: false,
            data: { 'name': name, 'email': email, 'message': message },
            dataType: 'html',
            beforeSend: function() {
                $('#send').attr("disabled", "disabled");
            },
            success: function(data) {
                if (data == true) {
                    $('#name').val("");
                    $('#email').val("");
                    $('#message').val("");
                    $('#send').text("Сообщение отправлено");
                    $('#email').css("border-color", "#60fc8c");
                    $('#name').css("border-color", "#60fc8c");
                    $('#message').css("border-color", "#60fc8c");
                } else {
                    if (data == false)
                        alert("Что-то пошло не так! Сообщение не отправлено");
                    else {
                        switch (data) {
                            case "Имя не указано":
                                $('#name').css("border-color", "#f7b4b4");
                                break;
                            case "Сообщение не указано":
                                $('#message').css("border-color", "#f7b4b4");
                                break;
                            case "Неправильный e-mail":
                                $('#email').css("border-color", "#f7b4b4");
                                break;
                            default:
                                $('#email').css("border-color", "#f7b4b4");
                                $('#message').css("border-color", "#f7b4b4");
                                $('#name').css("border-color", "#f7b4b4");
                        }
                    }
                }
                $('#send').removeAttr("disabled");
            }
        });
    });
    //


    $('#buttonForm').click(function() {

        var name = $("#name").val()
        var email = $("#email").val()
        var tel = $("#tel").val()
        var text = $("#text").val()
        $.ajax({
            type: "POST",
            url: "form.php",
            data: { 'name': name, 'email': email, 'tel': tel, 'text': text },
            dataType: 'html',
            beforeSend: function() {
                $('#buttonForm').attr("disabled", "disabled");
            },
            success: function(data) {
                if (data == true) {
                    $('#name').val("");
                    $('#email').val("");
                    $('#tel').val("");
                    $('#text').val("");
                    $('#result').html('<p>Повідомлення відправлено</p>');
                    $('#result').addClass('feedback__result-green');

                }
                if (data != false && data != true) {
                    $('#result').html(`<p>${data}</p>`);
                    $('#result').addClass('feedback__result-red');
                }
                if (data == false) {
                    $('#result').html('<p>Помилка</p>');
                    $('#result').addClass('feedback__result-red');
                }
                $('#buttonForm').removeAttr("disabled");
                setTimeout(function() {
                    $('#result').html(' ');
                    $('#result').removeClass('feedback__result-green');
                    $('#result').removeClass('feedback__result-red');
                }, 5000);
            }
        });
    });
});