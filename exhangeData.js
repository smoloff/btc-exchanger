const coinListCnt = document.getElementById('coins_list');

let exchangeData = [
    {
        name:"BNB",
        fullname:"BNB",
        lastPrice: 130.1,
        Change24h: -2.39
    },
    {
        name:"BTC",
        fullname:"Bitcoin",
        lastPrice: 42921.60,
        Change24h: -2.39      
    },
    {
        name: "ETH",
        fullname: "Etherium",
        lastPrice: 1800.80,
        Change24h: 0.61
    },
    {
        name: "DOGE",
        fullname:"Dogecoin",
        lastPrice: 0.067940,
        Change24h: -0.99
    },
];

const coinList = document.getElementById('coins_list'); // привязывается id куда вешать html


const renderCoinList = (name, fullname, lastPrice, Change24h) => `

<li>${name}<span class="grey">${fullname}</span></li> 
<li><span>${lastPrice}</span></li>
<li class="change_color">${Change24h}%</li>

`
;


const renderCoinListToHtml = () => {
let htmlItemS='';
exchangeData.forEach(currency => {
    let htmlItem = renderCoinList(currency.name, currency.fullname, currency.lastPrice, currency.Change24h); // почему здесь применяется currency.name, а в функции renderCoinList просто ключ name?
    // console.log(currency.name, currency.fullname, currency.lastPrice, currency.Change24h); // работает идеально!  
    htmlItemS += htmlItem;    
    
})  
coinListCnt.innerHTML = htmlItemS;
}

renderCoinListToHtml();


