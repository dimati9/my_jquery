'use strict'

/**
 * Проверка формы
 */
function validator() {
    let valid = true;
    //Определяем поле и его сообщение об ошибке
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');

    //Определяем поле и его сообщение об ошибке
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');

    //Определяем поле и его сообщение об ошибке
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    //Определяем поле и его сообщение об ошибке
    const repassword = document.getElementById('repassword');
    const repasswordError = document.getElementById('repassword-error');






        if (name.value === '' || name.value.length > 12 ) {
            nameError.textContent = 'Имя - должно содержать как минимум 1 символ, не более 12 символов.';
            nameError.style.color = 'red';
            nameError.style.display = 'block';
            name.style.borderColor = 'red';



                valid = false;
        }
        else {
            nameError.textContent = '';
            name.style.borderColor = 'green';


        }



        if (phone.value == '' || phone.value.length != 11) {
            phoneError.textContent = `Поле должно содержать 11 цифр. Сейчас ${phone.value.length}`;
            phoneError.style.color = 'red';
            phoneError.style.display = 'block';
            phone.style.borderColor = 'red';

            valid = false;



        }
        else {
            phoneError.textContent = '';
            phone.style.borderColor = 'green';
        }

    if (password.value == '' || password.value.length < 5 ||  password.value.length > 16) {
        passwordError.textContent = 'минимум 5 символов, максимум 16.';
        passwordError.style.color = 'red';
        passwordError.style.display = 'block';
        password.style.borderColor = 'red';

        valid = false;



    }
    else {
        passwordError.textContent = '';
        password.style.borderColor = 'green';
    }

    if (repassword.value !== password.value) {
        repasswordError.textContent = 'пароли не совпадают.';
        repasswordError.style.color = 'red';
        repasswordError.style.display = 'block';
        repassword.style.borderColor = 'red';

        valid = false;



    }
    else {
        repasswordError.textContent = '';
        repassword.style.borderColor = 'green';
    }

        return valid;


}


$('button').on('click', function() {
  $('.mask').addClass('active');
    $('form').toggleClass('hide', 'active');
});

$('.close').on('click', function() {
  $('.mask').removeClass('active');
    $('form').toggleClass('hide', 'active');
});

