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

fixture('Men')
   .beforeEach(async t => {
      await startAndResetSøknad(t, 0, config.fnr_mann);
   });

test('cannot apply', async t => {
   await t
      .navigateTo(config.url)
      .expect(welcomePage.speechBubble.textContent).contains('Du kan ikke søke for mor');

   if (await welcomePage.startButton.exists) {
      // couldn't figure out another way to trigger an assertion failure
      await t
         .expect(1).eql(2)
   }
});
