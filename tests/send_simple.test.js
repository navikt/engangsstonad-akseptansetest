import { Selector } from 'testcafe'
import { regularUser } from '../login'
import { config } from '../config'

fixture('Basic application')

test('Must be sent', async t => {
    await t
        .useRole(regularUser)
        .navigateTo(config.url)
        .click('#js-intro > div > form > div.responsiveContainer > div:nth-child(4) > div > div > div.inputPanel.bekreftCheckboksPanel > label > span')
        .click('#js-intro > div > form > div.responsiveContainer > div:nth-child(5) > button')
        .click('div.radioPanelWrapper:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
        .click('.engangsstonad__step > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
        .typeText('#termindato', '03.08.2018')
        .setFilesToUpload('input[type=file]', ['../upload.jpg'])
        .typeText('#terminbekreftelse', '03.08.2018')
        .pressKey('tab')
        .click('button.knapp')
        .click('div.radioPanelWrapper:nth-child(1) > label:nth-child(1)')
        .click('div.formblock__collapse:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)')
        .click('div.formblock__collapse:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)')
        .click('button.knapp:nth-child(3)')
        .click('.inputPanel__textlabel')
        .click('button.knapp:nth-child(3)')
        .expect(Selector('.typo-innholdstittel').innerText).contains('Takk for søknaden')
})



