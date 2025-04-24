const { faker } = require('@faker-js/faker');

class signInPage {

    get listTopTen() {return $('div[class="header-menu"] a[href="/top10-online.html"]') }
    get textTopTen() {return $('#dle-content > div:nth-child(1) > h1') }
    get topOne() {return $('#dle-content > div:nth-child(2) > div > div > div:nth-child(1) > a.act-item32') }
    get topTwo() {return $('#dle-content > div:nth-child(2) > div > div > div:nth-child(2) > a.act-item32') }
    get topThree() {return $('#dle-content > div:nth-child(2) > div > div > div:nth-child(3) > a.act-item32') }
    get topFour() {return $('#dle-content > div:nth-child(2) > div > div > div:nth-child(4) > a.act-item32') }
    get topFive() {return $('#dle-content > div:nth-child(3) > div > div > div:nth-child(1) > a.act-item32') }
    get topSix() {return $('#dle-content > div:nth-child(3) > div > div > div:nth-child(2) > a.act-item32') }
    get topSeven() {return $('#dle-content > div:nth-child(3) > div > div > div:nth-child(3) > a.act-item32') }
    get topEight() {return $('#dle-content > div:nth-child(3) > div > div > div:nth-child(4) > a.act-item32') }
    

        async topTenBtnText () {
        console.log("Text for Top 10 online games button is: " + await this.listTopTen.getText());  
        }
    
        async topTenBtnClickable () {
        console.log("Does Top 10 online games button clickable? " + await this.listTopTen.isClickable());  
        }
  
        async topTenBtnClick () {
        await this.listTopTen.click();  
        }

        async topTenText () {
            console.log("Top 10 the beast video games is: " + await this.textTopTen.getText());  
        }

        async topOneIs () {
            console.log("Top 1 is: " + await this.topOne.getText());  
        }

        async topTwoIs () {
            console.log("Top 2 is: " + await this.topTwo.getText());  
        }

        async topThreeIs () {
            console.log("Top 3 is: " + await this.topThree.getText());  
        }

        async topFourIs () {
            console.log("Top 4 is: " + await this.topFour.getText());  
        } 
        
        async topFiveIs () {
            console.log("Top 5 is: " + await this.topFive.getText());  
        }
        
        async topSixIs () {
                console.log("Top 6 is: " + await this.topSix.getText());  
        } 

        async topSevenIs () {
            console.log("Top 7 is: " + await this.topSeven.getText());  
        }

        async topEightIs () {
            console.log("Top 8 is: " + await this.topEight.getText());  
        }
   
    }

module.exports = new signInPage()