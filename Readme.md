NPM and NodeJS installation:

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

https://nodejs.org/en/download/


Protractor Locators

There are two kinds of locators present in Protractor
•	Angular Specific Locators
•	Locators inherited from webdriver
Global Functions for Protractor:
•	element - finds a single element
•	element.all - finds multiple elements
1. model: ng-model attribute is an angular locator. It locates the element by model attribute value given.
//HTML code
<span ng-model="person.name"></span>
//usage of locator 
element(by.model('person.name'));
2. binding: ng-bind is also an angular locator. Binding locator is used to locate the element using bind attribute value given.
Find an element by text binding. Does a partial match, so any elements bound to variables containing the input string will be returned.
//HTML Code
<span ng-bind="person.email.id"></span>
//usage of locator
element(by.binding('person.email'));
3. exactBinding: ng-bind It is also used for locating element using ng-bind locator, but with exact string/value
//HTML code
<span ng-bind="person.email.id"></span> //this is not be found as it is not exact value
<span ng-bind="person.emai"></span> //this element will be found as it is exact match
//usage of locator 
element(by.exactbinding('person.email'));

4. buttonText: It is used to locate an element using the text on button tag.
//Html code
<button>Save</button>
//Usage of locator
element(by.buttonText('save'));

//Html code
<button>
<label>Save As</label> //matches
</button>
//Usage of locator
element(by.buttonText('Save As'));

5. partialButtonText: It can locate the element using the partial text present in the button.
//Html code
<button>Save As Text</button>
//usage of locator
element(by.buttonText('Save'));

//Html code
<button> 
<label>Save As File</label>
</button>
//usage of locator
element(by.buttonText('Save As'));

6. Repeater: ng-repeat is angular locator. Repeater locator is used to locate the elements with ng-repeat attribute in it.
//Html code
<tr ng-repeat="product info">
       <td>{{prod.id}}</td>
       <td>{{prod.name}}</td>
       <td>{{prod.quantity}}</td>
</tr>
//Usage of locator
  let eleID = element(by.repeater('product info').row(0));
  let eleName = element(by.repeater('product info').row(1));

7. exactRepeater: It locates element with ng-repeat attribute with exact string present in it.
//Html code
<li ng-repeat="emp in employee_names"></li>
//usage of locator
element(by.exactRepeater('emp in employee_names'));

8. cssContainingText: It locates the element with text in it using css selector.
//Html code
<ul>
<li class="name">Mike</li>
   <li class="name">Linda</li>
</ul>
//usage of locator
element(by.cssContainingText('.name', 'Mike'));

9. Options: It locates the element with ng-option attribute in it.

//Html code
<select ng-options="options in list">
     <option value="0">Option 1</option>
     <option value="1">Option 2</option>
      <option value="2">Option 3</option>
</select>

//Usage of locator
let allOptions = element.all(by.options('options in list'));
expect(allOptions.count()).toEqual(3);  

Locators inherited from WebDriver:

element(by.id("firstButton"));
element(by.name("Ban"));
element(by.className("banana"));
element(by.tagname("button"));
element(by.linkText("Selenium WebDriver"));
element(by.partialLinkText("Selenium"));
element(by.css("#firstButton"));
element(by.xpath("//button[@name="Ban"]"));

Jasmine
•	Jasmine is a unit testing framework to test java script code
•	Jasmine is a behavior-driven development framework for testing JavaScript code.
•	Why Unit testing Framework(i.e Jasmine Framework)?

1.	Jasmine does not depend on any other JavaScript frameworks.
2.	Jasmine does not need any DOM.
3.	Jasmine framework is very clean and understandable.
4.	Jasmine is an open-source framework.
5.	Can manage/control test scripts.
Jasmine Test Building Blocks:
•	Describe Block – Test Suite
•	IT Block – Test
•	beforeEach – Executes multiple times before executing every IT block.
•	afterEach – Executes multiple times after executing every IT block
•	beforeAll – Executes one time before executing all IT block
•	afterAll – Executes one time after executing all IT block.
•	FDescribe Block - Focused describe block 
•	XDescribe Block – Disable describe block 
•	FIt Block - Focused it block 
•	Xit Block – Disable it block

Create an expectation for a spec. For this we use machers. 
•	toBe() 
•	toEqual() 
•	toBeNull() 
•	toContain() 
•	toBeGreaterThan() 
•	toBeGreaterThanOrEqual() 
•	toBeLessThan()
•	toBeLessThanOrEqual()
•	toBeNaN() 
•	toBeNull()

How to generate screenshots and html report with screenshots Step 
1 : Goto https://www.npmjs.com/package/protrac... 
Run command npm install protractor-jasmine2-screenshot-reporter --save-dev 
Step 2 : Copy the content in conf.js file 
Step 3 : Save and Run
