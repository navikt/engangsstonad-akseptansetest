import { Selector } from 'testcafe'

export class InfoOmBarnPage {

   constructor() {
      this.fødselFramtid = Selector('span.inputPanel__label').withText('frem i tid')
      this.fødselFortid = Selector('span.inputPanel__label').withText('tilbake i tid')
      this.ettBarn = Selector('span.inputPanel__label').withText('ett barn')
      this.tvillinger = Selector('span.inputPanel__label').withText('tvillinger')
      this.flereBarn = Selector('span.inputPanel__label').withText('flere barn')
      this.fødselsdato = Selector('#fødselsdato')
      this.termindato = Selector('#termindato')
      this.terminbekreftelse = Selector('#terminbekreftelse')
      this.neste = Selector('button.knapp')
      this.antallBarn = Selector('select')
      this.fileUpload = Selector('input[type=file]')
   }

}

