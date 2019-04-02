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

fixture('Woman younger than 18')
   .beforeEach(async t => {
      await startAndResetSøknad(t, 0, config.fnr_under_18);
   });

test('cannot apply', async t => {
   await t
      .navigateTo(config.url)
      .expect(welcomePage.speechBubble.textContent).contains('Fordi du er under 18 år');

   if (await welcomePage.startButton.exists) {
      // couldn't figure out another way to trigger an assertion failure
      await t
         .expect(1).eql(2)
   }
});
