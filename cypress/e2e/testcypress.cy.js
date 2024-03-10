
describe('Тестирование login.qa.studio', function () {
    
    it('Проверяю доступность сайта https://login.qa.studio/', function () {
        cy.visit('https://login.qa.studio/');
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.wait(500)
        cy.end();
         })

    it('Проверяю позитивный кейс авторизации на сайте', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#form').and('be.visible').contains('Форма логина') //проверяем, что блок #form виден пользователю и у него есть текст "Форма логина"
        cy.get('#mail').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mail кликабельный, его видит пользователь и у него есть плейсхолдер "E-mail"
        cy.get('#pass').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'пароль') //проверяем, что инпут #pass кликабельный, его видит пользователь и у него есть плейсхолдер "пароль"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#mail').type('german@dolnikov.ru') //вводим в инпут #mail текст "german@dolnikov.ru"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#pass').type('iLoveqastudio1') //вводим в инпут #pass текст "iLoveqastudio1"
        cy.get('#loginButton').and('be.enabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton кликабельна и имеет текст "Войти"
        cy.get('#loginButton').click() //кликаем по кнопке #loginbutton
        cy.get('#message').and('be.visible').contains('Авторизация прошла успешно') //проверяем, что появляется блок #message, он виден пользователю и у него есть текст "Авторизация прошла успешно"
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible').get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что появляется кнопка #exitMessageButton с иконкой .exitIcon, иконка и кнопка видны пользователю, кнопка кликабельна 
         })

        it('Проверяю позитивный кейс восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#forgotEmailButton').and('be.visible').and('be.enabled').contains('Забыли пароль?') //проверяем, что кнопка #forgotEmailButton имеет текст "Забыли пароль?", кнопка видна пользователю и кликабельна
        cy.get('#forgotEmailButton').click() //кликаем по кнопке #forgotEmailButton
        cy.get('#forgotForm').and('be.visible').contains('Восстановите пароль').and('be.visible') //проверяем, что блок forgotForm виден пользователю, у него есть текст "Восстановить пароль", который также виден пользователю
        cy.get('#restoreEmailButton').and('be.visible').and('be.enabled').contains('Отправить код') //проверяем, что кнопка #restoreEmailButton видна пользователю, она кликабельна и имеет текст "Отправить код"
        cy.get('#exitRestoreButton').and('be.enabled').and('be.visible') //проверяем, что кнопка #exitRestoreButton кликабельна и видна пользователю
        cy.get('#exitRestoreButton > .exitIcon').and('be.visible') //проверяем, что у кнопки #exitRestoreButton, есть подклас .exitIcon (иконка крестика) и он виден пользователю
        cy.get('#mailForgot').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mailForgot виден пользователю, кликабелен и у него есть плейсхолдер "E-mail"
        cy.get('#mailForgot').type('german@dolnikov.ru') //вводим в инпут #mailForgot текст "german@dolnikov"
        cy.get ('#restoreEmailButton').click() //кликаем по кнопке #restoreEmailButton
        cy.get('#message').and('be.visible').contains('Успешно отправили пароль на e-mail').and('be.visible') //проверяем, что блок #message виден пользователю, у него есть текст "Успешно отправили пароль на e-mail", который также виден пользователю
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible') //проверяем, что кнопка #exitRestoreButton кликабельна и видна пользователю
        cy.get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что у кнопки #exitRestoreButton, есть подклас .exitIcon (иконка крестика) и он виден пользователю
    })

    it('Проверяю негативный кейс авторизации на сайте (неправильный пароль)', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#form').and('be.visible').contains('Форма логина') //проверяем, что блок #form виден пользователю и у него есть текст "Форма логина"
        cy.get('#mail').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mail кликабельный, его видит пользователь и у него есть плейсхолдер "E-mail"
        cy.get('#pass').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'пароль') //проверяем, что инпут #pass кликабельный, его видит пользователь и у него есть плейсхолдер "пароль"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#mail').type('german@dolnikov.ru') //вводим в инпут #mail текст "german@dolnikov.ru"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#pass').type('неправильныйпароль') //вводим в инпут #pass текст "неправильныйпароль"
        cy.get('#loginButton').and('be.enabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton кликабельна и имеет текст "Войти"
        cy.get('#loginButton').click() //кликаем по кнопке #loginbutton
        cy.get('#message').and('be.visible').contains('Такого логина или пароля нет') //проверяем, что появляется блок #message, он виден пользователю и у него есть текст "Такого логина или пароля нет"
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible').get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что появляется кнопка #exitMessageButton с иконкой .exitIcon, иконка и кнопка видны пользователю, кнопка кликабельна 
         })

    it('Проверяю негативный кейс авторизации на сайте (неправильный логин)', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#form').and('be.visible').contains('Форма логина') //проверяем, что блок #form виден пользователю и у него есть текст "Форма логина"
        cy.get('#mail').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mail кликабельный, его видит пользователь и у него есть плейсхолдер "E-mail"
        cy.get('#pass').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'пароль') //проверяем, что инпут #pass кликабельный, его видит пользователь и у него есть плейсхолдер "пароль"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#mail').type('1german@dolnikov.ru') //вводим в инпут #mail текст "1german@dolnikov.ru"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#pass').type('iLoveqastudio1') //вводим в инпут #pass текст "неправильныйпароль"
        cy.get('#loginButton').and('be.enabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton кликабельна и имеет текст "Войти"
        cy.get('#loginButton').click() //кликаем по кнопке #loginbutton
        cy.get('#message').and('be.visible').contains('Такого логина или пароля нет') //проверяем, что появляется блок #message, он виден пользователю и у него есть текст "Такого логина или пароля нет"
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible').get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что появляется кнопка #exitMessageButton с иконкой .exitIcon, иконка и кнопка видны пользователю, кнопка кликабельна 
         })

        it('Проверяю негативный кейс авторизации на сайте (невалидный логин - без символа @)', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#form').and('be.visible').contains('Форма логина') //проверяем, что блок #form виден пользователю и у него есть текст "Форма логина"
        cy.get('#mail').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mail кликабельный, его видит пользователь и у него есть плейсхолдер "E-mail"
        cy.get('#pass').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'пароль') //проверяем, что инпут #pass кликабельный, его видит пользователь и у него есть плейсхолдер "пароль"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#mail').type('germandolnikov.ru') //вводим в инпут #mail текст "1german@dolnikov.ru"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#pass').type('iLoveqastudio1') //вводим в инпут #pass текст "неправильныйпароль"
        cy.get('#loginButton').and('be.enabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton кликабельна и имеет текст "Войти"
        cy.get('#loginButton').click() //кликаем по кнопке #loginbutton
        cy.get('#message').and('be.visible').contains('Нужно исправить проблему валидации') //проверяем, что появляется блок #message, он виден пользователю и у него есть текст "Нужно исправить проблему валидации"
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible').get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что появляется кнопка #exitMessageButton с иконкой .exitIcon, иконка и кнопка видны пользователю, кнопка кликабельна 
         })

        it('Проверяю позитивный кейс авторизации на сайте про который разраб говорит - "Это не баг, а фича"', function () {
        cy.visit('https://login.qa.studio/'); //проверяем доступность сайта
        cy.clearCookies() //очищаем куки
        cy.clearLocalStorage() //очищаем локалсторейдж
        cy.get('body').and('be.visible') //проверяем, что блок body виден пользователю
        cy.get('#form').and('be.visible').contains('Форма логина') //проверяем, что блок #form виден пользователю и у него есть текст "Форма логина"
        cy.get('#mail').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'E-mail') //проверяем, что инпут #mail кликабельный, его видит пользователь и у него есть плейсхолдер "E-mail"
        cy.get('#pass').and('be.visible').and('be.enabled').should('have.attr', 'placeholder', 'пароль') //проверяем, что инпут #pass кликабельный, его видит пользователь и у него есть плейсхолдер "пароль"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#mail').type('German@dolnikov.ru') //вводим в инпут #mail текст "german@dolnikov.ru"
        cy.get('#loginButton').and('be.disabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton задизейблина и имеет текст "Войти"
        cy.get('#pass').type('iLoveqastudio1') //вводим в инпут #pass текст "iLoveqastudio1"
        cy.get('#loginButton').and('be.enabled').and('be.visible').contains('Войти') //проверяем, что кнопка #loginbutton кликабельна и имеет текст "Войти"
        cy.get('#loginButton').click() //кликаем по кнопке #loginbutton
        cy.get('#message').and('be.visible').contains('Авторизация прошла успешно') //проверяем, что появляется блок #message, он виден пользователю и у него есть текст "Авторизация прошла успешно"
        cy.get('#exitMessageButton').and('be.enabled').and('be.visible').get('#exitMessageButton > .exitIcon').and('be.visible') //проверяем, что появляется кнопка #exitMessageButton с иконкой .exitIcon, иконка и кнопка видны пользователю, кнопка кликабельна 
         })
})