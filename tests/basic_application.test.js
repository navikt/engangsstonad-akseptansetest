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

const dateFormat = require('dateformat')

const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

fixture('Basic application')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_default))
   })

test('must be sent without errors', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.forståttChecker)
      .click(welcomePage.startButton)
      .click(infoOmBarnetPage.fødselFramtid)
      .click(infoOmBarnetPage.etBarn)
      .typeText(infoOmBarnetPage.termindato, dateFormat(tomorrow, "dd.mm.yyyy"))
      .setFilesToUpload(infoOmBarnetPage.fileUpload, ['../upload.jpg'])
      .typeText(infoOmBarnetPage.terminbekreftelse, dateFormat(today, "dd.mm.yyyy"))
      .pressKey('tab')
      .click(infoOmBarnetPage.neste)
      .click(tilknytningTilNorgePage.siste12INorge)
      .click(tilknytningTilNorgePage.neste12INorge)
      .click(tilknytningTilNorgePage.iNorgeVedFødsel)
      .click(tilknytningTilNorgePage.neste)
      .click(oppsummeringPage.bekreftRiktigeOpplysninger)
      .click(oppsummeringPage.sendInn)
      .expect(kvitteringPage.melding.innerText).contains('Takk for søknaden')
})

