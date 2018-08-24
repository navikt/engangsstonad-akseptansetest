import { config } from '../config'
import { LoginPage } from '../pages/login'
import { WelcomePage } from '../pages/welcome'

const loginPage = new LoginPage()
const welcomePage = new WelcomePage()

fixture('Applicants younger than 18')
   .beforeEach(async t => {
      await t.useRole(loginPage.login(config.fnr_under_18))
   })

test('must be rejected', async t => {
   await t
      .navigateTo(config.url)
      .expect(welcomePage.speechBubble.textContent).contains('Fordi du er under 18 år')

   if (await welcomePage.startButton.exists) {
      // couldn't figure out another way to trigger an assertion failure
      await t
         .expect(1).eql(2)
   }
})