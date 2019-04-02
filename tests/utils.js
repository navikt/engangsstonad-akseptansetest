import {
   ClientFunction
} from 'testcafe';
import {
   config
} from '../config';
import {
   LoginPage
} from '../pages/login';


const loginPage = new LoginPage();

const waitForInitialDataLoaded = ClientFunction(() => {
   return new Promise(resolve => {
      window.setInterval(() => {
         if (document.location.pathname !== '/') {
            resolve();
         }
      }, 100);
   });
});

const getPath = ClientFunction(() => document.location.pathname);

const getHost = ClientFunction(() => document.location.host);

export const startAndResetSøknad = async (t, cnt, fnr) => {
   await t.navigateTo(config.url);
   const host = await getHost();
   if (host && host.indexOf('login.microsoftonline.com') >= 0) {
      await t.useRole(loginPage.login(fnr));
   }
   await waitForInitialDataLoaded();
   await t.wait(1000); // Just because
   const path = await getPath();
   if (path.indexOf('engangsstonad') === -1 && cnt < 3) {
      await startAndResetSøknad(t, cnt++);
   }
};
