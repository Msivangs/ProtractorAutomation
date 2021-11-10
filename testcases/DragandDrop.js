describe("mysuite", function(){
    it("Drag and Drop", function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();
        
        var source_element=element(by.model('list1'));

        var target_element=element(by.model('list2'));

        browser.actions().dragAndDrop(source_element,target_element).perform();

        browser.sleep(5000);
 
        

    })
})