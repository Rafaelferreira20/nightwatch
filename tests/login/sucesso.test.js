
module.exports = {
    'login com sucesso': (browser) => {
        let userInfo = '.user .info span'
        browser
            .resizeWindow(1920, 1080)
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'sf.rafael20@gmail.com')
            .setValue('input[name=password]', 'teste652')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Rafael Ferreira')
        .end();
    }
}