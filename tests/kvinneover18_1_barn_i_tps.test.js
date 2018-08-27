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

const yesterday = moment().subtract(1, 'days').format(dateFormat)

fixture('Engangsstønad application')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_barn_tps))
   })

test('must be sent without errors', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.forståttChecker)
      .click(welcomePage.startButton)

      .click(infoOmBarnetPage.fødselFortid)
      .click(infoOmBarnetPage.ettBarn)
      .typeText(infoOmBarnetPage.fødselsdato, yesterday)
      .pressKey('tab')
      .click(infoOmBarnetPage.neste)

      .click(tilknytningTilNorgePage.siste12INorge)
      .click(tilknytningTilNorgePage.neste12INorge)
      .click(tilknytningTilNorgePage.iNorgeVedFødselFortid)
      .click(tilknytningTilNorgePage.neste)

      .click(oppsummeringPage.bekreftRiktigeOpplysninger)
      .click(oppsummeringPage.sendInn)

      .expect(kvitteringPage.melding.innerText).contains('Takk for søknaden')
})

