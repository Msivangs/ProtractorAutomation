describe("", function(){

    it("validate login", function(){
       browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
       browser.sleep(3000);
       browser.manage().window().maximize();

       expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");

       element(by.model("user.name")).sendKeys("Luke");
       element(by.model("user.password")).sendKeys("password");
       element(by.buttonText("Login")).click();
       browser.sleep(3000);

       var greetmsg=element(by.id("greetings"));
       greetmsg.getText().toBe("Hello Luke");
       expect(greetmsg.getText()).toBe("Hello Luke");  //Validate greeting message

       var logout=element(by.css('[ng-click="logout()"]'));
       expect(logout.isPresent()).toBe(true);

       logout.click();


    })

})