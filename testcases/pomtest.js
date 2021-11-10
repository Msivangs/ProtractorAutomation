
let studentpage=require('../Pages2/studentpage')
describe("mysuite", function() {
    
    it("addrecord", function() {

        studentpage.get("http://www.trycatchclasses.com/code/demo/angular4_curd/");

        studentpage.setName("John");
        studentpage.setContact("India");
        studentpage.setSubject("JS");
        studentpage.setMarks("100");
        browser.sleep(5000);
        studentpage.clickSubmit();

        browser.sleep(2000)
        studentpage.verifyResult("John","India","JS","100");
        browser.sleep(3000)

    })
})