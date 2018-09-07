import { config } from '../config'
import { LoginPage } from '../pages/login'
import { WelcomePage } from '../pages/welcome'
import { InfoOmBarnPage } from '../pages/info-om-barn'
import { TilknytningTilNorgePage } from '../pages/tilknytning-til-norge'
import { OppsummeringPage } from '../pages/oppsummering'
import { KvitteringPage } from '../pages/kvittering'

const loginPage = new LoginPage();
const welcomePage = new WelcomePage();
const infoOmBarnetPage = new InfoOmBarnPage();
const tilknytningTilNorgePage = new TilknytningTilNorgePage();
const oppsummeringPage = new OppsummeringPage();
const kvitteringPage = new KvitteringPage();

const dateFormat = 'DD.MM.YYYY';
const moment = require('moment');

const today = moment().format(dateFormat);
const tomorrow = moment().add(1, 'days').format(dateFormat);
const sevenMonthsAgo = moment().subtract(7, 'months').format(dateFormat);
const oneMonthAgo = moment().subtract(1, 'months').format(dateFormat);
const oneMonthFromNow = moment().add(1, 'months').format(dateFormat);
const fiveMonthsFromNow = moment().add(5, 'months').format(dateFormat);

fixture('Woman with past and future stays in another country')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_default))
   });

test('can apply', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.forståttChecker)
      .click(welcomePage.startButton)
      .click(infoOmBarnetPage.fødselFramtid)
      .click(infoOmBarnetPage.ettBarn)
      .typeText(infoOmBarnetPage.termindato, tomorrow)
      .setFilesToUpload(infoOmBarnetPage.fileUpload, ['../upload.jpg'])
      .typeText(infoOmBarnetPage.terminbekreftelse, today)
      .pressKey('tab')
      .click(infoOmBarnetPage.neste)

      .click(tilknytningTilNorgePage.siste12IUtlandet)
      .click(tilknytningTilNorgePage.leggTilLand)
      .click(tilknytningTilNorgePage.velgLand)
      .click(tilknytningTilNorgePage.velgLand.find('option').withText('Belgia'))
      .typeText(tilknytningTilNorgePage.boILandFraDato, sevenMonthsAgo)
      .typeText(tilknytningTilNorgePage.boILandTilDato, oneMonthAgo)
      .click(tilknytningTilNorgePage.leggTilLandIDialog)
      .click(tilknytningTilNorgePage.neste12IUtlandet)
      .click(tilknytningTilNorgePage.leggTilLand)
      .click(tilknytningTilNorgePage.velgLand)
      .click(tilknytningTilNorgePage.velgLand.find('option').withText('Sverige'))
      .typeText(tilknytningTilNorgePage.boILandFraDato, oneMonthFromNow)
      .typeText(tilknytningTilNorgePage.boILandTilDato, fiveMonthsFromNow)
      .click(tilknytningTilNorgePage.leggTilLandIDialog)
      .click(tilknytningTilNorgePage.neste)

      .click(oppsummeringPage.bekreftRiktigeOpplysninger)
      .click(oppsummeringPage.sendInn)
      .expect(kvitteringPage.melding.innerText).contains('Takk for søknaden')
});

