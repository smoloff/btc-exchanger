document.getElementById('exchange').addEventListener('click', function (e) {
    e.preventDefault();
    exchange();
})
const BTCtoUSD = 42961.6;


const exchange = () => {   
    let btcCount = document.getElementById('btc-cource').value;
    let usdCount = document.getElementById('usd-cource').value; 

    usdCount = btcCount * BTCtoUSD;
    
    document.getElementById('usd-cource').value = usdCount;       
}

