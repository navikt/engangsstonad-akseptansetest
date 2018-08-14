import { Selector } from 'testcafe'
import { regularUser } from '../login'
import { config } from '../config'

fixture('Terms and conditions')

test('Must be accepted', async t => {
    await t
        .useRole(regularUser)
        .navigateTo(config.url)
        .click('#js-intro > div > form > div.responsiveContainer > div:nth-child(5) > button')
        .expect(Selector('#js-intro > div > form > div.responsiveContainer > div:nth-child(4) > div > div > div:nth-child(2) > div')
            .innerText).eql('Du må bekrefte at du har lest og forstått')
})
