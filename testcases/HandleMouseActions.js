describe("mysuite", function () {
    it("mousehoverActions", function () {
        browser.ignoreSynchronization = true;
        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.manage().window().maximize();

       
        element(by.id('txtUsername')).sendKeys('Admin');
        element(by.id('txtPassword')).sendkeys('admin123');
        element(by.id('btnLogin')).click();

        browser.sleep(3000);

        var admin = element(by.id('menu_admin_viewAdminModule'));
        var usermgnt = element(by.id('menu_admin_UserManagement'));
        var users = element(by.id('menu_admin_viewSystemUsers'));

        browser.actions().mouseMove(admin).mouseMove(usermgnt).mouseMove(users).click().perform();
        browser.sleep(5000);

    })
})