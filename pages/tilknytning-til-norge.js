import { Role, Selector } from 'testcafe'

export class TilknytningTilNorgePage {

   constructor() {
      this.siste12INorge = Selector('div.radioPanelWrapper:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
      this.siste12IUtlandet = Selector('div.radioPanelWrapper:nth-child(2) > label:nth-child(1) > span:nth-child(2)')
      this.neste12INorge = Selector('div.formblock__collapse:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
      this.neste12IUtlandet = Selector('div.formblock__collapse:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)')
      this.iNorgeVedFødsel = Selector('div.formblock__collapse:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)')
      this.iUtlandetVedFødsel = Selector('div.formblock__collapse:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)')
      this.leggTilLand = Selector('button.knapp:nth-child(2)')
      this.boILandFraDato = Selector('#boddFraDato')
      this.boILandTilDato = Selector('#boddTilDato')
      this.velgLand = Selector('select')
      this.neste = Selector('button.knapp:nth-child(3)')
   }

}
