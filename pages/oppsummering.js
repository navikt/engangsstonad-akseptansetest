import { Selector } from 'testcafe'

export class OppsummeringPage {

   constructor() {
      this.bekreftRiktigeOpplysninger = Selector('input[name="bekreftOpplysninger"]');
      this.sendInn = Selector('button.knapp:nth-child(3)');
   }

}

