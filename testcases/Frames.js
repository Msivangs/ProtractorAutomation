describe("testsuite", function(){
    it("framestest", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.selenium.dev/");
        browser.manage().window().maximize();

        element(by.xpath("//span[.='Documentation']")).click();

        //swith to first frame
        browser.switchTo.frame("Documentation");
        element(by.xpath("//a[@id='m-documentationwebdriver']/span[.='WebDriver']")).clcik();
        browser.sleep(3000);

        //it will switch to default frame
        browser.switchTo().defaultContent();

        //browser switch to second frame
        //browser.switchTo().frame("packageFrame");
       // element(by.linkText('WebDriver')).click();
       // browser.sleep(3000);
       // browser.switchTo().defaultContent();
     })
}) 