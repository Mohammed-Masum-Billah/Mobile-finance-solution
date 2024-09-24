/* Steps
- 
*/
// Add money
document.getElementById('btn-add-money').addEventListener('click',function (event) {
    event.preventDefault();

    const addAmountinput = document.getElementById('input-add-amount').value;
    console.log(addAmountinput);
    const pinNumberinput = document.getElementById('input-pin-numb').value;
    console.log(pinNumberinput);

    if (pinNumberinput=== '1234') {
        console.log('Money added');
        const balance=document.getElementById('acct-balance').innerText;
        console.log(balance);
        
        const addMoneyNumber=parseFloat(addAmountinput);
        const addBalance=parseFloat(balance);
        const newBalance= addMoneyNumber + addBalance;
        console.log(newBalance);
        
        document.getElementById('acct-balance').innerText=newBalance;


        document.getElementById('add-money-form').classList.remove('hidden')
        document.getElementById('cash-out-form').classList.add('hidden')
    
    } 
    else {
        console.log(' Please Try again later.');
    }
})

// Cash out

document.getElementById('btn-cash-out').addEventListener('click',function (event) {
    event.preventDefault();

    const cashOutinput = document.getElementById('input-cash-out').value;
    console.log(cashOutinput);
    const pinNumberInput = document.getElementById('input-pin-numbs').value;
    console.log(pinNumberInput);

    if (pinNumberInput=== '1234') {
        console.log('Money deduct');
        const balance=document.getElementById('acct-balance').innerText;
        console.log(balance);
        
        const subMoneyNumber=parseFloat(cashOutinput);
        const addBalance=parseFloat(balance);
        const newBalance= addBalance - subMoneyNumber;
        console.log(newBalance);
        
        document.getElementById('acct-balance').innerText=newBalance;


        document.getElementById('cash-out-form').classList.remove('hidden')
        document.getElementById('add-money-form').classList.add('hidden')
    } 
    else {
        console.log(' Please Try again later.');
    }
})