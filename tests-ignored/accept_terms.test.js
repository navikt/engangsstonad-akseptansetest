import { config } from '../config'
import { LoginPage } from '../pages/login'
import { WelcomePage } from '../pages/welcome'

const loginPage = new LoginPage();
const welcomePage = new WelcomePage();

fixture('Terms and conditions')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_default))
   });

test('must be accepted', async t => {
   await t
      .navigateTo(config.url)
      .click(welcomePage.startButton)
      .expect(welcomePage.errMsg.innerText).contains('Du må bekrefte at du har lest og forstått')
});
