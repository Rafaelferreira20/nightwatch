
var userActions = {
    expectLoggedUser: function (nome) {
        return this
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Rafael Ferreira')
    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo:  '.user .info span'
    }
}