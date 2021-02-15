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

//отображение на экране
const renderCoinList = (name, fullname, lastPrice, Change24h) => `
<ul>
<li>${name} <span class="grey">${fullname}</span></li>
<li>${lastPrice}</li>
<li class=${(Change24h > 0) ? "blue" : "red"}>${Change24h}</li>
</ul>
`
;

const renderCoinListToHtml = () => {
    let htmlItemS=''; //переменнная для помещения всех сгенерированных htmlItem
    exchangeData.forEach(currency => {
        let htmlItem = renderCoinList(currency.name,currency.fullname, currency.lastPrice, currency.Change24h);
        htmlItemS = htmlItemS + htmlItem;
        console.log(currency.Change24h)
    })
    coinListCnt.innerHTML = htmlItemS;
}

renderCoinListToHtml();