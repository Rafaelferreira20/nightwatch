
module.exports = {
    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '111')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}