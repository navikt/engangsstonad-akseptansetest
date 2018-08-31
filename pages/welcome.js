import { Selector } from 'testcafe'

export class WelcomePage {

   constructor() {
      this.forståttChecker = Selector('input[name="egenerklaring"]');
      this.startButton = Selector('button.knapp');
      this.errMsg = Selector('div.skjemaelement__feilmelding');
      this.speechBubble = Selector('div.speechBubble__text');
   }

}

