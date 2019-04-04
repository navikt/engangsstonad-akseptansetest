import {
   ClientFunction,
   Role,
   Selector
} from 'testcafe'
import {
   config
} from '../config'

export const waitForIDPortenOptionPage = ClientFunction(() => {
   return new Promise(resolve => {
      window.setInterval(() => {
         if (document.location.href.indexOf('login.microsoftonline.com') >= 0) {
            resolve();
         }
      }, 100);
   });
});

export class LoginPage {

   constructor() {
      this.utenIdPortenButton = Selector('#StubExchange');
      this.usernameField = Selector('#i0116');
      this.passwordField = Selector('#i0118');
      this.nextButton = Selector('#idSIButton9');
      this.signInButtonAzure = Selector('#idSIButton9');
      this.dontShowAgainChecker = Selector('#KmsiCheckboxField');
      this.noButton = Selector('#idBtn_Back');
      this.fnrField = Selector('input[name="login"]');
      this.signInButtonB2C = Selector('.login')
   }

   fillOutLoginForm = (t) => {
      return t.typeText(this.usernameField, config.user)
         .click(this.nextButton)
         .typeText(this.passwordField, config.pass)
         .click(this.signInButtonAzure)
         .click(this.dontShowAgainChecker)
         .click(this.noButton);

   }

   login = (fnr) => {
      return Role(config.url, async t => {
         waitForIDPortenOptionPage();
         await t.click(this.utenIdPortenButton);
         await this.fillOutLoginForm(t);
         if (await this.fnrField.exists) {
            await t.typeText(this.fnrField, fnr)
         } else if (await this.usernameField.exists) {
            await this.fillOutLoginForm(t);
            await t.typeText(this.fnrField, fnr)
         }
         await t.click(this.signInButtonB2C)
      })
   }

}
