describe("mysuite", function()
{

    beforeAll(function(){
        console.log("Launching App.........");
    })

    afterAll(function(){
        console.log("Close the App.........");
    })

    beforeEach(function(){
          console.log("This is Login....");
    })

    afterEach(function(){
        console.log("This is Logout....");
   })

    it("search Test", function()
    {
        //steps
        console.log("This is my search test...");
    })
    it("Advanced Search", function()
    {
        //steps
        console.log("This is my advanced search test...");
    })

})


