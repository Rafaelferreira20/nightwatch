
module.exports = {
    'login com sucesso': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()


        browser.resizeWindow(1920, 1080)

        login.navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'sf.rafael20@gmail.com')
            .setValue('@passInput', 'teste652')
            .click('@loginButton')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Rafael Ferreira')
            .end();
    }
}