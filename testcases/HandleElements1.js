describe("mysuite", function(){
    it("add new user", function()
    {
        browser.get("https://www.trycatchclasses.com/code/demo/angular_crud/#");
        element(by.css('span[ng-click="adduser"]')).click();
        element(by.model("UserFirstname")).sendKeys("John");
        element(by.model("UserLastname")).sendKeys("Kenedy");
        element(by.model("UserType")).sendKeys("5");
        element(by.model("UserActive")).click();
        element(by.css("[ng-clcik='AddUpdateUser()']")).click();
        browser.sleep(5000);
        let alert=browser.switchTo().alert();
        expect(alert.getText()).toEqual("User Information Added Successfully.");
        alert.accept();
        browser.sleep(3000);

        //Dropdown
        element(by.model("search.type")).element(by.css("option[value='number:5']")).click();
        browser.sleep(5000);
        
    })
})