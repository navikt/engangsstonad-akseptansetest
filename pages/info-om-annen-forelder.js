import { Selector } from 'testcafe'

export class AnnenForelderPage {

   constructor() {
      this.navn = Selector('#js-annenForelder');
      this.fnr = Selector('#js-fødselsnummer');
      this.neste = Selector('button.knapp:nth-child(3)');
   }

}

