describe("mysuite", function () {
    it("mouseDoubleClickActions", function () {

        browser.waitForAngularEnabled(false);
        browser.get("http://testautomationpractice.blogspot.com/");
        browser.manage().window().maximize();

        var button = element(by.xpath("//button[.='Copy Text']"));

        //1 Approach
        // browser.actions().mouseMove(button).doubleClick().perform();

        //2 Approach
        browser.actions().doubleClick(button).perform();
        browser.sleep(5000);
    })
})

