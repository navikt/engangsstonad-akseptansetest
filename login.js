import { Role } from 'testcafe'
import { config } from './config'

export const regularUser = Role(config.login_url, async t => {
    await t
    .click('#StubExchange')
    .typeText('#i0116', config.user)
    .click('#idSIButton9')
    .typeText('#i0118', config.pass)
    .click('#idSIButton9')
    .click('#KmsiCheckboxField')
    .click('#idSIButton9')
    .typeText('div.login-card:nth-child(1) > form:nth-child(3) > input:nth-child(2)', config.fnr_default)
    .click('.login')
})
