const Nightmare = require('../xnightmare.js');
const config = require('../folio-ui.config.js');
const helpers = require('../helpers.js');

/* global describe it */

describe('Calendar Test ("test-calendartest")', function runMain() {
  this.timeout(Number(config.test_timeout));

  describe('Login > Click Caledar > Check Month (Check the Back, Next, Today) > Check Week (Check Back, Next, Today) > Logout\n', () => {
    const nightmare = new Nightmare(config.nightmare);

    const currentMLabel = 'April 2018';
    const backMLabel = 'March 2018';
    const nextMLabel = 'May 2018';

    const currentWLabel = 'April 22 - 28';
    const backWLabel = 'April 15 - 21';
    const nextWLabel = 'April 29 - May 05';


    it('should login', (done) => {
      helpers.login(nightmare, config, done);
    });
    it('click Calendar', (done) => {
      nightmare
        .wait('#clickable-calendar-module')
        .click('#clickable-calendar-module')
        .wait(555)
        .then(done)
        .catch(done);
    });
    it('Month Check', (done) => {
      nightmare
        .wait('#ModuleContainer')
        .xclick('//span[.="month"]')
        .wait(555)
        .evaluate(function run(currentMLabel1) {
          const ele = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele !== currentMLabel1) { throw new Error(ele); }
        }, currentMLabel)
        .wait(555)
        .xclick('//span[.="back"]')
        .evaluate(function run(backMLabel1) {
          const ele2 = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele2 !== backMLabel1) throw new Error(ele2);
        }, backMLabel)
        .wait(555)
        .xclick('//span[.="today"]')
        .wait(555)
        .xclick('//span[.="next"]')
        .evaluate(function run(nextMLabel1) {
          const ele3 = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele3 !== nextMLabel1) throw new Error(ele3);
        }, nextMLabel)
        .wait(555)
        .xclick('//span[.="today"]')
        .wait(555)
        .then(done)
        .catch(done);
    });
    it('Week Check', (done) => {
      nightmare
        .xclick('//span[.="week"]')
        .wait(555)
        .evaluate(function run(currentWLabel1) {
          const ele = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele !== currentWLabel1) { throw new Error(ele); }
        }, currentWLabel)
        .wait(555)
        .xclick('//span[.="back"]')
        .evaluate(function fun(backWLabel1) {
          const ele2 = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele2 !== backWLabel1) throw new Error(ele2);
        }, backWLabel)
        .wait(555)
        .xclick('//span[.="today"]')
        .wait(555)
        .xclick('//span[.="next"]')
        .evaluate(function run(nextWLabel1) {
          const ele3 = document.querySelector('span[class="rbc-toolbar-label"]').textContent;
          if (ele3 !== nextWLabel1) throw new Error(ele3);
        }, nextWLabel)
        .wait(555)
        .xclick('//span[.="today"]')
        .wait(555)
        .then(done)
        .catch(done);
    });
    it('should logout', (done) => {
      helpers.logout(nightmare, config, done);
    });
  });
});
