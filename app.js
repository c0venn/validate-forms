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
     let regexcreditcard = [0-9]{13,16}
     let regexcvv = "^[0-9]{3, 4}$";


     if (this.cardnumber.value === '' || !regexcreditcard.test(this.cardnumber.value)){
         alert("Inserte Un Numero De Tarjeta Válida");
         this.cardnumber.classList.add('is-invalid');
         return;
     }
        this.cardnumber.classList.remove('is-invalid');
        this.cardnumber.classList.add('is-valid');

        if (this.putcvv.value=== '' || !regex)
})