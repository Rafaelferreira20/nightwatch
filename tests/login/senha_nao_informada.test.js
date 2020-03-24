
module.exports = {
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('sf.rafael20@gmail.com', '')
            .expectAlertInfo( 'Opps. Cadê a senha?')
    }
}