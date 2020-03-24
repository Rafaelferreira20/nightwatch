
module.exports = {
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('aaa@gmail.com', '111')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}