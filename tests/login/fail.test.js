
module.exports = {
    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '111')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('aaa@gmail.com', '111')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '111')
            .expectAlertInfo('Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '')
            .expectAlertInfo( 'Opps. Cadê a senha?')
    }
}