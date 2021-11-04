describe("expectdemo", function()
{
    it("expecttest",function()
    {
        //test1
       //let x=100;
      //expect(x).toBe(100);
       //expect(x).not.toBe(100);

       //expect(x).toEqual(100);
      //expect(x).not.toEqual(150);

       //Test2
       //let x=[10,20,30];
       //expect(x).toBe([10,20,30]);
       //expect(x).toEqual([10,20,30]);

       //Test3
      // let x=[10,20,30];
       //let y=x;
       //expect(x).toBe(y);

       //Test4
       //let arr=[10,20,30,40,50];
       //expect(arr).toContain(30);
       //expect(arr).toContain(100); //failed
       //expect(arr).not.toContain(100);

       //Test5
       //let names=["David","John","Kennedy"];
       //expect(names).toContain("Kennedy");

       //Test6
       //let value=100;
       //expect(value).toBeGreaterThan(50);
       //expect(value).toBeLessThan(200);

       //Test6
       let value=100;
       expect(value).toBeNaN();
       expect(value).not.toBeNaN();
       
    })
})