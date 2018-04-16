import { Selector, ClientFunction } from 'testcafe'; // Import testcafe selectors
import { ReactSelector } from 'testcafe-react-selectors'; // Import the testcafe module
import request from 'request'; // Addition module for image response request

fixture `Test Modus Create Budget Sample Application page elements and user functionality`
    .page `http://localhost:3000`;

// Test #1
test('Verify that the main Budget site basic elements are present on page', async t => {
    const budgetButton = ReactSelector('a').withExactText('Budget');
    const reportsButton = ReactSelector('a').withExactText('Reports');
    const categoryColumnText = ReactSelector('th').withExactText('Category');
    const descriptionColumnText = ReactSelector('th').withExactText('Description');
    const amountColumnText = ReactSelector('th').withExactText('Amount');

    await t
      .expect(budgetButton.exists).ok()
      .expect(reportsButton.exists).ok()
      .expect(categoryColumnText.exists).ok()
      .expect(categoryColumnText.exists).ok()
      .expect(amountColumnText.exists).ok();

});

// Test #2
// Test will trigger an assertion error due to the object being undefined
// Verifying Description and Amount inputs require non-static test code since due the dynamic nature of the user-entered text
test('Verify that description column contains specific item names', async t => {
    const getLocation = ClientFunction(() => {
      return document.location.href.toString;
    });

    await t
      .expect(getLocation()).contains('Concert');
});

// Test #3
test('Click Reports button for verification that Inflow vs Outflow and Spending by Category views are present', async t => {
    const getUrl = ClientFunction(() => {
      return document.location.href;
    });

    await t
      .click(Selector('a').withExactText('Reports'))
      .expect(getUrl()).eql('http://localhost:3000/reports/inflow-outflow')
      .click(Selector('a').withExactText('Spending by Category'))
      .expect(getUrl()).eql('http://localhost:3000/reports/spending');

});

// Test #4
test('Verify that Inflow vs Outflow bar graphs are present on Reports view', async t => {
    const inflowOutflowGraphs = ReactSelector('rect').exists;

    await t
      .click(Selector('a').withExactText('Reports'))
      .expect(inflowOutflowGraphs).ok();

});

// Test #5
test('Verify that all expected images exist on Budget and Reports views', async t => {
    const getLocation = ClientFunction(() => window.location.href);

    var images          = Selector('svg');
    var count           = await images.count;
    var location        = await getLocation();
    var requestPromises = [];

    for (var i = 0; i < count; i++) {
        var url = await images.nth(i).getAttribute('src');

        if (!url.startsWith('data')) {
            requestPromises.push(new Promise(resolve => {
                return request(location + url, function (error, response) {
                    resolve(response ? response.statusCode : 0);
                });
            }));
        }
    }

    var statuses = await Promise.all(requestPromises);

    for (const status of statuses)
        await t.expect(status).eql(200);
});
