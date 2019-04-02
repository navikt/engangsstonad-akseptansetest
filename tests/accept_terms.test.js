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
   startAndResetSøknad
} from '../tests/utils';

const welcomePage = new WelcomePage();

fixture('Terms and conditions')
   .beforeEach(async t => {
      await startAndResetSøknad(t, 0, config.fnr_default);
   });

test('must be accepted', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.startButton)
      .expect(welcomePage.errMsg.innerText).contains('Du må bekrefte at du har lest og forstått')
});
