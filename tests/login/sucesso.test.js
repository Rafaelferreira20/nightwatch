
module.exports = {
    'login com sucesso': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        browser.resizeWindow(1920, 1080)

        login.with('sf.rafael20@gmail.com', 'teste652')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Rafael Ferreira')
            .end();
    }
}