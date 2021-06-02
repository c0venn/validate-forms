const form = document.getElementById('form');
let cardnumber = document.getElementById('inputcarnumber');
let putcvv = document.getElementById('inputcvv');
let amount = document.getElementById('inputamount');
let name = document.getElementById('firstname');
let putlastname = document.getElementById('lastname');
let putcity = document.getElementById('city');
let putstate = document.getElementById('state');
let codepostal = document.getElementById('postalcode');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
     let regexcreditcard = ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$
     let regexcvv = ^[0-9]{3,4}$
     let regexamount = ^[0-9]{3,9}$

     if (this.cardnumber.value === '' || !regexcreditcard.test(this.inputcardnumber.value)){
         alert("Input a correct card number");
         this.cardnumber.classList.add('is-invalid');
         return;
     } else{
        this.cardnumber.classList.remove('is-invalid');
        this.cardnumber.classList.add('is-valid');

     } if (this.putcvv.value=== '' || !regexcvv.test(this.putcvv.value)){
         alert("Input a valid CVV ");
         this.putcvv.classList.add('is-invalid');
         return;
    }else{
        this.putcvv.classList.remove('is-invalid');
        this.putcvv.classList.add('is-valid');

    }if (this.inputamount.value === '' || !regexamount.test(this.inputamount.value)){
         alert("Input the amount to pay");
         this.inputamount.classList.add('is-invalid');
         return;
     }else{
        this.inputamount.classList.remove('is-invalid');
        this.inputamount.classList.add('is-valid');
     }
})