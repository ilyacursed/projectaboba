mp.events.add("playerReady", player => {
    player.call('showLoginDialog');
});
let loginBrowser;

mp.events.add('showLoginDialog', () => {
    loginBrowser = mp.browsers.new('package://accounts/cef/index.html'); // инициализируем браузер и отображаем страничку входа
    loginBrowser.execute("mp.invoke('focus', true)"); // показываем курсор
    mp.gui.chat.activate(false); // блокируем открытие чата при вводе текста в поля формы
});
function showRegister(){
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

function showLogin(){
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'none';
}
function registerAttempt(){
    // считываем содержимое полей
    const login = document.getElementById('reg-login').value;
    const password = document.getElementById('reg-password').value;
    const passwordConfirm = document.getElementById('reg-password-confirm').value;
    resetError();

    // Проверяем чтобы поля были заполнены, они были нужной длинны и пароли совпадали
    if(!login || login.length < 3){
        return showError('Введите логин');
    }

    if(!password || password.length < 6){
        return showError('Введите пароль');
    }

    if(password != passwordConfirm){
        return showError('Пароли не совпадают');
    }

    // Отправляем логин и пароль на клиент
    mp.trigger('registerAttempt', JSON.stringify({ login, password }) );
}

function loginAttempt(){
    const login = document.getElementById('log-login').value;
    const password = document.getElementById('log-password').value;
    resetError();

    if(!login || login.length < 3){
        return showError('Введите логин');
    }

    if(!password || password.length < 6){
        return showError('Введите пароль');
    }

    mp.trigger('loginAttempt', JSON.stringify({ login, password }) );
}
function showError(message){
    const errorBlock = document.getElementById('error');
    errorBlock.innerText = message;
    errorBlock.style.display = 'block';
}

function resetError(){
    const errorBlock = document.getElementById('error');
    errorBlock.innerText = '';
    errorBlock.style.display = 'none';
}
mp.events.add('loginAttempt', (data) => {
    mp.events.callRemote('onLoginAttempt', data);
});

mp.events.add('registerAttempt', (data) => {
    mp.events.callRemote('onRegisterAttempt', data);
});
mp.events.add('onLoginAttempt', (player, data) => {
    data = JSON.parse(data); // преобразовуем данные из json в объект
    DB.query('SELECT * FROM accounts WHERE login = ? LIMIT 1', [data.login], function (error, results) { // ищем аккаунт по логину
        if(results.length == 0) return player.call('showAuthError', ['Неверный Логин и/или Пароль']); // если аккаунт с таким логином не найден, то возвращаем на клиент текст ошибки

        const passwordHash = results[0].password; // если же аккаунт есть, то берем его хеш пароля
        bcrypt.compare(data.password, passwordHash, function(err, isMatched) { // сравниваем хэши паролей из базы данных и того что указал пользователь
            if( isMatched ) return player.call('hideLoginDialog');  // если пароли не совпадают, значит пользователь авторизовался успешно
            player.call('showAuthError', ['Неверный Логин и/или Пароль']); // если же пароли не совпали, то опять таки возвращаем на клиент текст ошибки при помощи события showAuthError
        });
    });
});
mp.events.add('showAuthError', (errorMessage) => {
    loginBrowser.execute(`showError("${errorMessage}")`);
});
mp.events.add('hideLoginDialog', () => {
    loginBrowser.execute("mp.invoke('focus', false)");
    loginBrowser.active = false;
    mp.gui.chat.activate(true);
});
mp.events.add('onRegisterAttempt', (player, data) => {
    data = JSON.parse(data);

    DB.query('SELECT id FROM accounts WHERE login = ?', [data.login], function (error, results) {  // Проверяем уникальность логина
        if(results.length > 0) return player.call('showAuthError', ['Аккаунт с таким Логином уже существует']); // Если такой логин уже есть, то возвращаем ошибку

        bcrypt.hash(data.password, saltRounds, function(err, passwordHash) { // Создаем хэш пароля
            DB.query('INSERT INTO accounts SET login = ?, password = ?', [data.login, passwordHash], function (error, results) { // Добавляем аккаунт в базу данных
                player.call('hideLoginDialog'); // Скрываем окно авторизации
            });
        });
    });

});