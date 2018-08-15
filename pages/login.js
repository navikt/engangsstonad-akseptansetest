import { Role, Selector } from 'testcafe'
import { config } from '../config'

export class LoginPage {

   constructor() {
      this.utenIdPortenButton = Selector('#StubExchange')
      this.usernameField = Selector('#i0116')
      this.passwordField = Selector('#i0118')
      this.nextButton = Selector('#idSIButton9')
      this.signInButtonAzure = Selector('#idSIButton9')
      this.dontShowAgainChecker = Selector('#KmsiCheckboxField')
      this.noButton = Selector('#idBtn_Back')
      this.fnrField = Selector('div.login-card:nth-child(1) > form:nth-child(3) > input:nth-child(2)')
      this.signInButtonB2C = Selector('.login')
   }

   login = (fnr) => {
      return Role(config.login_url, async t => {
         await t
            .click(this.utenIdPortenButton)
            .typeText(this.usernameField, config.user)
            .click(this.nextButton)
            .typeText(this.passwordField, config.pass)
            .click(this.signInButtonAzure)
            .click(this.dontShowAgainChecker)
            .click(this.noButton)
            .typeText(this.fnrField, fnr)
            .click(this.signInButtonB2C)
      }, { preserveUrl: true })
   }

}
