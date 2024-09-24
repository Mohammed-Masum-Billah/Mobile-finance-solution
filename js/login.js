// Sst login button event handler
document.getElementById('login-btn'),addEventListener('click',function(event){
// Prevent defult behaviour(prevent reloading pages.)
    event.preventDefault();
    // console.log('Pressed Login button');
// Get the phone number
    const phoneNumber=document.getElementById('phn-numb').value;
    const pinNumber=document.getElementById('pin-numb').value;
    if (phoneNumber== '0123456789' && pinNumber=== '1234') {
        console.log('Logging in...');
        window.location.href='home.html'
    } else {
        console.log('PLease try aging.');
        
    }

})