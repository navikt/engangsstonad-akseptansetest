import { config } from '../config'
import { LoginPage } from '../pages/login'
import { WelcomePage } from '../pages/welcome'
import { InfoOmBarnPage } from '../pages/info-om-barn'
import { TilknytningTilNorgePage } from '../pages/tilknytning-til-norge'
import { OppsummeringPage } from '../pages/oppsummering'
import { KvitteringPage } from '../pages/kvittering'

const loginPage = new LoginPage()
const welcomePage = new WelcomePage()
const infoOmBarnetPage = new InfoOmBarnPage
const tilknytningTilNorgePage = new TilknytningTilNorgePage()
const oppsummeringPage = new OppsummeringPage()
const kvitteringPage = new KvitteringPage()

const dateFormat = 'DD.MM.YYYY'
const moment = require('moment')

const oneWeekAgo = moment().subtract(7, 'days').format(dateFormat)

fixture('Woman from Nordic EØS country')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_nordisk_eøs))
   })

test('can apply', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.forståttChecker)
      .click(welcomePage.startButton)

      .click(infoOmBarnetPage.fødselFortid)
      .click(infoOmBarnetPage.ettBarn)
      .typeText(infoOmBarnetPage.fødselsdato, oneWeekAgo)
      .pressKey('tab')
      .click(infoOmBarnetPage.neste)

      .click(tilknytningTilNorgePage.siste12INorge)
      .click(tilknytningTilNorgePage.neste12INorge)
      .click(tilknytningTilNorgePage.iUtlandetVedFødsel)
      .click(tilknytningTilNorgePage.neste)

      .click(oppsummeringPage.bekreftRiktigeOpplysninger)
      .click(oppsummeringPage.sendInn)
      .expect(kvitteringPage.melding.innerText).contains('Takk for søknaden')
})

