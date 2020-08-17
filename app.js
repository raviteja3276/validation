document.getElementById('name').addEventListener('blur',validname);
document.getElementById('phonenumber').addEventListener('blur',validpn);
document.getElementById('zipcode').addEventListener('blur',validzipcode);
document.getElementById('email').addEventListener('blur',validemail);


function validname(){
        const name=document.getElementById('name');
        const re=/^[a-zA-z]{4,8}$/
            console.log(name.value)
        if (!re.test(name.value)) {
            name.classList.add('is-invalid')
        } else {
            name.classList.remove('is-invalid')
        }
    }

function validpn(){
    const phone=document.getElementById('phonenumber');
    const re=/^[0-9]{10}$/

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid') 
     } else {
        phone.classList.remove('is-invalid')
  
     }
}

function validzipcode(){
    //523-373
    const pin=document.getElementById('zipcode');
    const re=/^[0-9]{3}(-[0-9]{3}$)/

    if (!re.test(pin.value)) {
       pin.classList.add('is-invalid') 
    } else {
        pin.classList.remove('is-invalid')
 
    }
    
}

var validemail=()=>{
    //ravitejareddy264@gmail yahoo ourkut.com
    const mail=document.getElementById('email');
    const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).\([a-zA-Z]{3,5})$/

    if (!re.test(mail.value)) {
        mail.classList.add('is-invalid') 
     } else {
         mail.classList.remove('is-invalid')
  
     }
    
}

console.log("hello")