
module.exports = {

    before: (browser) => {
        browser.resizeWindow(1920, 1080)

    },
    after: (browser) => {
        browser.end();
    },


    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '111')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('aaa@gmail.com', '111')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '111')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    }
}