# Modus Create - Test Automation Assignment

## Introduction

What We're Looking For

We're not looking for advanced development skills so don't focus too much on test or code complexity. We are looking for well-organized tests that are stable and pass consistently and a test plan that shows you put some thought into how you would approach testing the application.

Tests must pass when we run them unless otherwise noted in your documentation.

This is a coding exercise that will gauge your experience as a QA Engineer. With this exercise, you will be creating tests to interact with a simple budget management app built with React.

We are looking for end-to-end tests and NOT unit tests.

## Ground Rules

* We will ask you to write tests using either Ruby or Javascript. Look for that information in the associated email you received.
* You may chose any setup you wish (framework, libraries, modules, gems, etc.) as long as it uses the language asked for.
 * **JS examples**: [WebdriverIO](http://webdriver.io/),
 [Nightmare](https://github.com/segmentio/nightmare), [CodeceptJS](http://codecept.io/)
 * **Ruby examples**: [Watir](http://watir.com/), [Capybara](http://teamcapybara.github.io/capybara/)
* You may structure and organize your tests any way you like.
* You must submit your solution by providing a link to a GitHub repo containing a `README.md` file with any documentation you deem suitable. Please write any documentation in English.
* We must be able to verify your submission by cloning your repo, installing any necessary modules or gems (via `npm install` or `bundle install`), and running your tests.

## Prerequisites

Clone and build the [Budgeting Sample App](https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2) project. Add an `e2e` folder in the top-most directory of the cloned project and store your work there.

### Requirement 1
Write a test plan for the application. This plan should include appropriate test coverage with both negative and positive test scenarios. Be sure to include the plan in your `README.md` file and try to be as thorough as possible.

### Requirement 2
Select **3** test scenarios from your test plan to automate. Be sure to include appropriate directions in your `README.md` file for running your tests.

### Requirement 3
Text execution should spin up a Chrome browser and include at least one scenario that fails. Don't forget to include appropriate commentary for the failing test.

## Bonus Points
* Incorporate Cucumber into your tests
* Include the ability to generate an HTML report of the test results
* Organize test execution using either `npm` or `rake` depending on the test framework chosen
* Use a design pattern to structure your tests

## How We Will Test Your Solution

We will clone your project and attempt to run tests against the same application. We should be able to easily run them and determine what is being tested from the code and documentation you write.

## Follow Up Actions

At any follow up phone / video interview, you should be prepared to talk about:

* The libraries you chose to work with
* Your rationale for organizing your tests
* How you would provide documentation to engineers wanting to learn about and use your tests
* How your implementation might scale to handle a growing application
* Any other implementation specific details about your submission
