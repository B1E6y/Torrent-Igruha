const signInPage = require('../page/signIn.page.js')
const listTopGamesPage = require('../page/listTopGames.page.js');

describe("Should check SignIn form for torrents-igruha website and list top 10 videogames" , async () => {
    
    it('Go to website https://neolit.ua/ua/', async () => {
        await browser.url('https://itorrents-igruha.org/new-pc-games/');
        await browser.maximizeWindow();
        await browser.pause(100);
        })

    it('Should check the SignIn form', 
        async () => {
            
        await signInPage.signInClickable();
        await browser.pause(100);
    
        await signInPage.signInClick();
        await browser.pause(100);
    
        await signInPage.setLogin();
        await browser.pause(100);
    
        await signInPage.setPassword();
        await browser.pause(100);
    
        await signInPage.loginBtn();
        await browser.pause(100);
    })    

   
    it('Should list Top 10 games', 
        async () => {
        
        await listTopGamesPage.topTenBtnText();
        await browser.pause(100);

        await listTopGamesPage.topTenBtnClickable();
        await browser.pause(100);

        await listTopGamesPage.topTenBtnClick();
        await browser.pause(100);

        await listTopGamesPage.topTenText();
        await browser.pause(100);

        await listTopGamesPage.topOneIs();
        await browser.pause(100);

        await listTopGamesPage.topTwoIs();
        await browser.pause(100);

        await listTopGamesPage.topThreeIs();
        await browser.pause(100);

        await listTopGamesPage.topFourIs();
        await browser.pause(100);

        await listTopGamesPage.topFiveIs();
        await browser.pause(100);

        await listTopGamesPage.topSixIs();
        await browser.pause(100);

        await listTopGamesPage.topSevenIs();
        await browser.pause(100);

        await listTopGamesPage.topEightIs();
        await browser.pause(100);
        })

        }   
)
