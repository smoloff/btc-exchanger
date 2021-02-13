let i = 0;
let re_assign = false;
const BTCtoUSD = 42961.6;

document.getElementById('exchange').addEventListener('click', function (e) {
    e.preventDefault();
    exchange();
    console.log(re_assign)
})


document.getElementById('re-assign-currency').addEventListener('click', function (e) {
    re_assign = document.getElementById('re-assign-currency').checked;    
    exchange();
     
})

const exchange = () => {    
    let Count1 = document.getElementById('usdCource').value; 
    let Count2 = document.getElementById('btcCource').value; 
    
    if (re_assign){
        Count1 =  Count2 / BTCtoUSD;         
        document.getElementById('label1').innerHTML = 'Bitcoin';
        document.getElementById('label2').innerHTML = 'USD';          
    } else {        
        Count1 =  BTCtoUSD * Count2; 
        document.getElementById('label1').innerHTML = 'USD';
        document.getElementById('label2').innerHTML = 'Bitcoin';        
    } 
    
    document.getElementById('usdCource').value = Count1;
    document.getElementById('btcCource').value = Count2; 
                 
}

