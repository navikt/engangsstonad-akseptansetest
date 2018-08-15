import { Selector } from 'testcafe'

export class OppsummeringPage {

   constructor() {
      this.bekreftRiktigeOpplysninger = Selector('.inputPanel__textlabel')
      this.sendInn = Selector('button.knapp:nth-child(3)')
   }

}

