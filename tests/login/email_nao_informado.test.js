
module.exports = {
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '111')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}