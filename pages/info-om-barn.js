import { Selector } from 'testcafe'

export class InfoOmBarnPage {

   constructor() {
      this.fødselFramtid = Selector('div.radioPanelWrapper:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
      this.fødselFortid = Selector('div.radioPanelWrapper:nth-child(2) > label:nth-child(1) > span:nth-child(2)')
      this.etBarn = Selector('div.formblock__collapse:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)')
      this.toBarn = Selector('div.formblock__collapse:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)')
      this.flereBarn = Selector('div.radioPanelWrapper:nth-child(3) > label:nth-child(1) > span:nth-child(2)')
      this.fødselsdato = Selector('#fødselsdato')
      this.termindato = Selector('#termindato')
      this.terminbekreftelse = Selector('#terminbekreftelse')
      this.neste = Selector('button.knapp')
      this.antallBarn = Selector('select')
      this.fileUpload = Selector('input[type=file]')
   }

}

