import {
   config
} from '../config'
import {
   LoginPage
} from '../pages/login'
import {
   WelcomePage
} from '../pages/welcome'
import {
   InfoOmBarnPage
} from '../pages/info-om-barn'
import {
   TilknytningTilNorgePage
} from '../pages/tilknytning-til-norge'
import {
   OppsummeringPage
} from '../pages/oppsummering'
import {
   KvitteringPage
} from '../pages/kvittering'
import {
   startAndResetSøknad
} from '../tests/utils';

const welcomePage = new WelcomePage();
const infoOmBarnetPage = new InfoOmBarnPage();
const tilknytningTilNorgePage = new TilknytningTilNorgePage();
const oppsummeringPage = new OppsummeringPage();
const kvitteringPage = new KvitteringPage();

const dateFormat = 'DD.MM.YYYY';
const moment = require('moment');

const today = moment().format(dateFormat);
const tomorrow = moment().add(1, 'days').format(dateFormat);

fixture('Woman older than 18 in Norway')
   .beforeEach(async t => {
      await startAndResetSøknad(t, 0, config.fnr_default);
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

      .click(tilknytningTilNorgePage.siste12INorge)
      .click(tilknytningTilNorgePage.neste12INorge)
      .click(tilknytningTilNorgePage.neste)

      .click(oppsummeringPage.bekreftRiktigeOpplysninger)
      .click(oppsummeringPage.sendInn)

      .expect(kvitteringPage.melding.innerText).contains('Takk for søknaden')
});
