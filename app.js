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
     let regexcreditcard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
     let regexcvv = /^[0-9]{3,4}$/
     let regexamount = /^[0-9]{3,9}$/
     let regexname= /^[0-9]{1,15}$/
     let regexpostalcode = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/
     

    if (this.cardnumber.value === '' || !regexcreditcard.test(this.inputcardnumber.value)){
         alert("Input a correct card number");
         this.cardnumber.classList.add('is-invalid');
         return;
     } 
        this.cardnumber.classList.remove('is-invalid');
        this.cardnumber.classList.add('is-valid');

    if (this.putcvv.value=== '' || !regexcvv.test(this.inputcvv.value)){
         alert("Input a valid CVV ");
         this.putcvv.classList.add('is-invalid');
         return;
     }
        this.putcvv.classList.remove('is-invalid');
        this.putcvv.classList.add('is-valid');

    if (this.amount.value === '' || !regexamount.test(this.inputamount.value)){
         alert("Input the amount to pay");
         this.inputamount.classList.add('is-invalid');
         return;
     }
        this.amount.classList.remove('is-invalid');
        this.amount.classList.add('is-valid');

    if (this.name.value === '' || !regexname.test(this.firstname.value)){
         alert("Input your name");
         this.firstname.classList.add('is-invalid');
         return;
     }
        this.name.classList.remove('is-invalid');
        this.name.classList.add('is-valid');

    if (this.putlastname.value === '' || !regexname.test(this.lastname.value)){
         alert("Input your lastname");
         this.lastname.classList.add('is-invalid');
         return;
     }
        this.putlastname.classList.remove('is-invalid');
        this.putlastname.classList.add('is-valid');

        if (this.putcity.value === '' || !regexname.test(this.city.value)){
         alert("Input your name");
         this.city.classList.add('is-invalid');
         return;
     }
        this.putcity.classList.remove('is-invalid');
        this.putcity.classList.add('is-valid');

        
        if (this.putstate.value === '' || !regexname.test(this.state.value)){
         alert("Input your state");
         this.state.classList.add('is-invalid');
         return;
     }
        this.putstate.classList.remove('is-invalid');
        this.putstate.classList.add('is-valid');

        
        if (this.codepostal.value === '' || !regexpostalcode.test(this.postalcode.value)){
         alert("Input your postal code");
         this.postalcode.classList.add('is-invalid');
         return;
     }
        this.postalcode.classList.remove('is-invalid');
        this.postalcode.classList.add('is-valid');

     
})