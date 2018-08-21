import { Role, Selector } from 'testcafe'

export class WelcomePage {

   constructor() {
      this.forståttChecker = Selector('#js-intro > div > form > div.responsiveContainer > div:nth-child(4) > div > div > div.inputPanel.bekreftCheckboksPanel > label > span')
      this.startButton = Selector('#js-intro > div > form > div.responsiveContainer > div:nth-child(5) > button')
      this.errMsg = Selector('#js-intro > div > form > div.responsiveContainer > div:nth-child(4) > div > div > div:nth-child(2) > div')
      this.speechBubble = Selector('div.speechBubble__text')
   }

}

