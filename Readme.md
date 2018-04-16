# Modus Create - Budgeting Sample Application - Test Automation Assignment - Doug Major

## Test Plan

### Introduction
Diving in to the Modus Create Budgeting Sample Application test automation assignment presented me with many new exciting options in determining how to best develop a test plan including a selection of automation tests. My previous software testing background relied mainly on using Java, a small bit of Javascript and Ruby Selenium, Maven, JUnit and Allure for all web application testing. 

To meet the requirements (e.g. no Java) for this project, I decided to challenge myself by using Javascript for writing the tests, along with implementing the Node.js tool [TestCafe](http://devexpress.github.io/testcafe/) as my end-to-end web-based testing framework. My reasoning behind selecting TestCafe over a Selenium-driven framework for this assignment was based on the following:

* Easy installation and doesn't require WebDriver, ready to run tests after `npm install -g testcafe` (thus no additional installs/configuration/maintenance of plugins, libraries, dependencies, products etc.).
* It's built on top of Node.js, which I have more familiarity with, and runs tests quickly in real browsers.
* There's a bit more stability than Selenium, as it automatically waits for page loads and XHR requests, and I'm very happy with the async/wait JS ES2017 feature along with the smart test actions and assertions that wait for page elements to appear.
* The TestCafe API library is clear, concise and offers many possibilities, including full-featured front-end framework-specific libraries of selectors for testing web applications.
* While the features include CI, reporters, concurrent testing and solid debug reporting, there's a growing ecosystem of developers creating custom plugins and extensions that give great enthusiasm. 

### Project Background
The Modus Create Budgeting Sample Application is a contemporary React web application that offers users the ability to enter and track their income and expenses. Additionally, it enables the user with a feature to graphically view all financial activity 'Inflow vs Outflow' and drill down into their 'Spending by Category' with visual bar graphs and pie chart representations of the items entered in on the 'Budget' view.

### Objectives and Tasks
For the purposes of this assignment, the ultimate goal is to devise a scalable end-to-end test suite that mimics what and how a user would interact with the web application delivering successful expected results. This includes the way in which the application launches, responds to user input and validation that subsequent-displayed data is correct across both the 'Budget' and 'Reports' features.

### Scope 
At a high level, for this product release version, the automation testing scope for this project is the to test all features available to the end user within the 'Budget' and 'Reports' views of the application. The test suite here allows coverage of the application that unit tests and integration test do not cover. The benefits are that the application test suite can be run as frequently as possible, allows timely developer code push and production deployment releases with deeper trust. Lastly, this testing will catch errors missed during manual, unit and integration testing. 

### Features to be tested
The user input field in the application consists of eight main areas to test, where a user will interact with the application. Since the application only allows a user to 'Add' an item, not remove or edit, and the positive or negative 'Value' entered is predetermined by the 
Category selection (e.g. Income is fixed to a positive numerical value, while all other categories are fixed to a negative numerical value), automating a user's behavior is a bit more straightforward. 
The eight key areas are: 
1. Main launch page / clickable Budget button 
2. Category drop-down selection
3. Description entry field
4. Amount entry field
5. Clickable and Return-key Add button
6. Clickable Reports button
7. Clickable Spending by Category tab
8. Clickable Inflow vs Outflow tab

The application also features graphic and numerical data displays on the 'Budget' and 'Reports' views of the application that will require verification/comparison testing to ensure that the entered data, of text and dollar amounts entered into the 'Budget' inputs correctly persist across both views.
This includes: 
1. The 'Working Balance' numerical display on the bottom of the 'Budget Page'
2. The 'Inflow vs Outflow' bar graphs on the 'Reports' view
3. The 'Spending by Category' pie charts on the 'Reports' view

### Item Pass/Fail Criteria
The defined success criteria ('Pass') of each item/feature relies on the test case strictly meeting the expected outcome. For this product, each test case has a clear identification of criteria required to deduce a 'Pass' or 'Fail'. The criteria can be further defined by three areas for the testing of this application:
1. Suspension - any scenario which causes a blocker to continue the automation testing.
* This could be due to issues within the environment (local and development configuration), server, browser, version release and test harness.
* An example specific to this application is where automation testing fails due to an external browser issue (e.g. the latest Chrome release triggers issue/test failure when launching the application on [localhost:3000](http://localhost:3000) due to a new browser feature or as mentioned in the product notes because localhost not on https/SSL.
2. Resumption - As in the Chrome browser example scenario above, where the test automation suspension occurred due to a new feature that blocked the successful automation application launch, the issue is identified, automation test code or command is updated, then testing may resume. 
* An example in identifying the test case failure issue, parallel browser test execution would be a strong and timely tactic to resolve the automation blocker
* During the development of my automated test scenarios for this application, I discovered that the local Chrome tests were not consistently passing. Running the tests in parallel, across multiple browsers yielded results that showed the test in question passing locally in Firefox and Safari, but not in Chrome. This documented in the Environmental Requirements below, but it led to running the automation testing file command that included a skip Javsascript web page error option to pass the test.
3. Approval - the scenario in which each test has met the expected outcome defined in the test case, after re-running the test suite. For this application approval occurred in the Chrome example after resuming the test suite with Chrome tests passing. 

### Test Cases / Proof of Concept
The individual test cases below are a set of automate-able tests that will yield the general application and user-behavior results.

| Test Case                                                             | Expected Outcome                               | Result    |    
| --------------------------------------------------------------------- | ---------------------------------------------- | ----------|        
| TC01 - Launch Application via localhost:3000                          | Application should successfully launch         | Pass/Fail |
|                                                                       | in browser(s) selected                         |           |
| TC02 - Verify that the main/home 'Budget' view basic                  | All expected columns, column text, text entry  | Pass/Fail | 
| elements are present on page                                          | fields are present                             |           |
| TC03 - Verify that all expected images exist on the 'Budget'          | Modus Create svg logo, is present on both views| Pass/Fail |   
| and 'Reports' views                                                   |                                                |           |
| TC04 - Verify that description column contains                        | Placeholder description items are present      | Pass/Fail |       
| specific item names                                                   | (e.g.'Gas', 'Paycheck', 'Trader Joe's food')   |           |      
| TC05 - Click 'Reports' button for verification that                   | 'Inflow vs Outflow' and 'Spending by Category' | Pass/Fail |
| 'Inflow vs Outflow' and 'Spending by Category' views are present      | exist and display the correct text fields      |           |
| TC06 - Verify that the 'Inflow vs Outflow' bar graphs are present     | 'Inflow vs Outflow' bar graphs are displaying  | Pass/Fail |
| on the 'Reports' page                                                 |                                                |           | 
| TC07 - Click and verify that the 'Spending by Category' pie chart     | 'Spending by Category pie chart is displaying' | Pass/Fail |
| is present on the 'Reports' page                                      |                                                |           |
| TC08 - Click the 'Budget' tab, then click the 'Category' drop-down    | 'Category' drop-down give the user 17 options  | Pass/Fail |
| button and verify that there are 17 options available                 | to select                                      |           |
| TC09 - Click on 'Category' drop-down and select option 15 'Income',   | A new item 'Paycheck' is created displaying in | Pass/Fail |
| then click in to the 'Description' field, enter text 'Paycheck', next | the 'Description' column, with the 'Amount'    |           |
| click in to Value field and enter '4000', then click the Add button   | '$4,000' populating the Amount column          |           |
|                                                                       | Additionally, 'Total Inflow' - 'Total Outflow' |           |  
|                                                                       | = 'Working Balance' is verified and updated    |           | 
|                                                                       | with a positive numerical value increase       |           |        | TC10 - Click on 'Category' drop-down and select option 6 'Travel',    | A new item 'Colombia' is created displaying in | Pass/Fail |
| then click in to the 'Decscription' field, enter text 'Colombia', next| the 'Description' column, with the 'Amount'    |           |        | click in to Value field and enter '7000', then click Add button       | '-$7,000' populating the Amount column         |           |
|                                                                       | Additionally, 'Total Inflow' - 'Total Outflow' |           |
|                                                                       | = 'Working Balance' is verified and updated    |           |
|                                                                       | with a negative numerical value decrease       |           |    
| TC11 - Repeat TC09 and TC10 with various generated Text and Numerical | All added items are present with the correct   |           |
| values for example 'Category' item in the drop-down                   | text, numerical value and 'Working Balance'    |           |
|                                                                       | correctly reflects the change in item Inflow   |           |
|                                                                       | and Outflow values (postive or negative)       |           |
| TC12 - Click on 'Reports' tab and verify that the newly added items   | Numerical values should compare and equal      | Pass/Fail |
| in the 'Budget' view are correctly represented in 'Inflow vs Outflow' | those created in 'Budget' view, newly added    |           |
|                                                                       | items have Category text updated, values       |           |
|                                                                       | updated and the bar graph is updated including |           |
|                                                                       | Inflow/Outflow values                          |           |
| TC13 - Click on the 'Spending by Category' tab under 'Reports' tab and| Numerical values should compare and equal      | Pass/Fail |
| verify that newly added items in the 'Budget' view are correctly      | those created in 'Budget' view, newly added    |           |
| represented in 'Spending by Category'                                 | items have Category text updated, values       |           |
|                                                                       | updated and the pie chart is updated           |           |                                                                                           

### Environmental Requirements
Below are the detailed steps/specifications, tools and commands for replicating my selected automation tests on the Budgeting Sample Application.

* Clone and build my repo version of the Budget Sample Application [modusCreate-QA-automation-project]() that contains the `e2e` folder with a selection of my test scripts to run against the application.

* My browser and hardware environment for this project: Chrome 65.0.3325 / Mac OS X 10.13.4

* Navigate to the locally saved project directory of the modusCreate-QA-automation-project, and into the `e2e` folder.

* Ensure that [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) are installed and/or updated to the latest versions.

* Install TestCafe on the command line: 
`npm install -g testcafe`

* Install the TestCafe React plugin:
`$ npm install testcafe-react-selectors`

* Start up the previously built application:
`npm run serve` to serve the app on [localhost:3000](http://localhost:3000)

* Open a new terminal tab or command line.

* The Chrome potential known automation issue execution (as mentioned above in the Pass/Fail Criteria section) with TestCafe can sometimes require that you run my automation test script with following suffix:
`--skip-js-errors`

* Enter and run the following on the command line (Chrome can be subbed out for Firefox, Safari etc.):
`testcafe chrome doug-major-moduscreate-qa-automation-tests.js --skip-js-errors`

* TestCafe should launch Chrome, [localhost:3000](http://localhost:3000), and the automation tests should run successfully.

* Command line output should return each test in the suite where 1 of the 5 automation tests will fail (Test #2 as detailed in the commented-out explanation above the test code). All other tests should pass successfully. 


#### Other potential dependencies and/or errors known that can affect the automation test script to fail to execute:
* According to the [Node.js documentation3](https://nodejs.org/api/modules.html#modules_addenda_package_manager_tips), if you are using require in the `doug-major-moduscreate-qa-automation-tests.js` file, the testcafemodule should be in the node_modules folder. Please note that this does not apply to the fs module, because it's a build-in Node.js module.  

As such, use a locally installed TestCafe version and type the following [command6](https://docs.npmjs.com/cli/link) in your project folder: 
`npm link testcafe`
