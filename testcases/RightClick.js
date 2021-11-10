describe("mysuite", function(){
    it("RightClick", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        browser.manage().window().maximize();

       var rightClick =  element(by.className("context-menu-one btn btn-neutral"));

       //Right Click Action
       browser.actions().click(rightClick,protractor.Button.RIGHT).perform();

       browser.sleep(5000);


    })
})