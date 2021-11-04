
let homepage = require('./Pages/homepage');
describe("demo calcualtor tests", function () {
    it("addidition test", function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.entersecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('7');
        browser.sleep(2000);
    })

})