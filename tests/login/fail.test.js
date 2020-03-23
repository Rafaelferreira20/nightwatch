
module.exports = {

    before: (browser) => {
        browser.resizeWindow(1920, 1080)

    },
    after: (browser) => {
        browser.end();
    },

    'senha incorreta': (browser) => {
        let alert = '.alert-danger span'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'sf.rafael20@gmail.com')
            .setValue('input[name=password]', '111')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')
    },
    'não cadastrado': (browser) => {
        let alert = '.alert-danger span'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'aaa@gmail.com')
            .setValue('input[name=password]', '111')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')
    },
    'email não informado': (browser) => {
        let alert = '.alert-info span'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', '')
            .setValue('input[name=password]', '111')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let alert = '.alert-info span'
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'aaa@gmail.com')
            .setValue('input[name=password]', '')
            .click('.login-button')
            .waitForElementVisible(alert, 3000)
            .assert.containsText(alert, 'Opps. Cadê a senha?')
        
    }
}