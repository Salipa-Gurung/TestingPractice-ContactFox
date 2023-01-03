## Selectors 
```js
const baseURL = "http://localhost:3000/";
const logoutBtnSelector = "//span[@class='hide-sm']";
const emailSelector = "//input[@name='email']";
const passwordSelector = "//input[@name='password']";
const loginBtnSelector = "//input[@value='Login']";
```

## Given
```js
Given('user has navigated to login page',async function () {
    console.log("Given step running...");
    await page.goto(baseURL);
  });
```
## When
```js
When('user logs in with following credentials',async function (dataTable) {
    console.log("When step running...");
    console.log(dataTable);
    const details = dataTable.hashes();
    console.log(details);

   for(let data of details){
    await page.fill(emailSelector, data.email);
    await page.fill(passwordSelector, data.password);
   }

    await page.click(loginBtnSelector);
  });
```
## Then
```js
Then('user should be navigated to Contact Fox page',async function () {
    console.log("Then step running...");
    const logoutBtnLocator = page.locator(logoutBtnSelector);
    await expect(logoutBtnLocator).toBeVisible();
});
```