const { faker } = require('@faker-js/faker');

class signInPage {

    get signIn() {return $('#open-mini-profile') }
    get login() {return $('#login_name') }
    get password() {return $('#login_password') }
    get continueBtn() {return $('.fbutton') }
    
        async signInClickable () {
        console.log("Does signIn button clickable? " + await this.signIn.isClickable());  
        }
  
        async signInClick () {
        await this.signIn.click();  
        }

        async setLogin () {
            await this.login.setValue('Janiv1776');   
        }

        async setPassword () {
            await this.password.setValue('asdasdas@2e2awed');   
        }

        async loginBtn () {
            await this.continueBtn.click();   
        }
          
    }

module.exports = new signInPage()