describe("tabledemo", function()
{

    beforeAll(function(){
        browser.get("https://dassdevarajan.github.io/demo-app/");
        browser.sleep(5000);
    })

    it("View product details", function(){

        //view product
        var product_name = "1001 Activities Book";
        var description = "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
        var category = "Books";
        var qty='300';
        var unitprice = '4';
        var supplier = 'ABC Publications';
        var returnable = 'false';
      
        element.all(by.tagName('tr')).last().element(by.id('view')).click();

        expect(element(by.tagName("h3")).getText()).toBe('Product View');

        expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(product_name);
        expect(element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText()).toBe(description);
        expect(element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText()).toBe(category);
        expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe(qty);
        expect(element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText()).toBe(unitprice);
        expect(element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText()).toBe(supplier);
        expect(element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText()).toBe(returnable);

        browser.sleep(5000);

    })

    it("Navidate to list products", function(){

        element(by.id("list-menu")).click();
        expect(element(by.tagName("h3")).getText()).toBe("Product List");
    })

    it("Delete Product", function(){
        browser.sleep(5000);
        element.all(by.tagName('tr')).get(1).element(by.id("delete")).click();
        
    })
})