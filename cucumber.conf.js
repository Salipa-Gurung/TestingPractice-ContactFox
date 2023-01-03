const {Before, BeforeAll, After, AfterAll, setDefaultTimeout} = require('@cucumber/cucumber');
const {chromium } = require('playwright');
 
setDefaultTimeout(60000)
BeforeAll(async function(){
    global.browser = await chromium.launch({
        headless:false,
        slowMo:1000,
        channel:'chrome'
    })
})

Before(async function(){
    console.log("This is executed before every scenario");
    global.context = await browser.newContext();
    global.page = await context.newPage();
});

After(async function(){
    await global.page.close();
    await global.context.close();
});

AfterAll(async function(){
    await global.browser.close();
});
