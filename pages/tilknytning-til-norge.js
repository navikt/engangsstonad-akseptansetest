import { Role, Selector } from 'testcafe'

export class TilknytningTilNorgePage {

   constructor() {
      this.siste12INorge = Selector('span.inputPanel__label').withText('kun bodd i Norge')
      this.siste12IUtlandet = Selector('span.inputPanel__label').withText('bodd i utlandet helt eller delvis')
      this.neste12INorge = Selector('span.inputPanel__label').withText('kun bo i Norge')
      this.neste12IUtlandet = Selector('span.inputPanel__label').withText('bo i utlandet helt eller delvis')
      this.iNorgeVedFødsel = Selector('span.inputPanel__label').withText('være i Norge')
      this.iUtlandetVedFødsel = Selector('span.inputPanel__label').withText('være i et annet land')
      this.leggTilLand = Selector('button.knapp:nth-child(2)')
      this.leggTilLandIDialog = Selector('body.ReactModal__Body--open div.ReactModalPortal div.ReactModal__Overlay.ReactModal__Overlay--after-open.modal__overlay div.ReactModal__Content.ReactModal__Content--after-open.modal.countryModal section form div.formblock.formblock--xxs div.countryModal__buttonBar button.knapp.knapp--hoved')
      this.boILandFraDato = Selector('#boddFraDato')
      this.boILandTilDato = Selector('#boddTilDato')
      this.velgLand = Selector('.selectContainer select')
      this.neste = Selector('div#app div.app div.engangsstonad div form.responsiveContainer button.knapp.responsiveButton.knapp--hoved')
   }

}


