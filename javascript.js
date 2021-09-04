// loder-------------------------------------------------------
let loader = document.querySelector('.loder');

function preloder(){
    setTimeout(()=>{
        loader.classList.add('loActive')
    } , 1800)
};

//----------------------------------- register part js-------------------------------
const nextBTN = document.querySelector('.next');
const passSection = document.querySelector('.passwordSection');
const nextbtn = document.querySelector('.nischit');
const regInput = document.querySelectorAll('.regInput');
const inputBuisness = document.querySelector('.inputBusiness');
const inputNumber = document.querySelector('.inputNumber');
const eye1 = document.querySelector('#eye1');
const eye2 = document.querySelector('#eye2');
const registerSec = document.querySelector('#register');

nextBTN.addEventListener('click',()=>{
    let name = inputBuisness.value;
    let number = inputNumber.value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Number',number);
    
    
    
    // const regInput = document.querySelectorAll('.regInput');


    passSection.classList.add('passActive')

});

inputBuisness.addEventListener('input',()=>{
    if (inputBuisness.value !== '' && inputNumber.value !== ''){
        nextBTN.classList.add('ButtonActive');
    }
    else{
        nextBTN.classList.remove('ButtonActive');
    }
});
inputNumber.addEventListener('input',()=>{
    if (inputBuisness.value !== '' && inputNumber.value !== ''){
        nextBTN.classList.add('ButtonActive');
    }
    else{
        nextBTN.classList.remove('ButtonActive');
    }
});

eye1.addEventListener('click',()=>{
    
    if(eye1.classList.contains('fa-eye')){
        pin.type = 'password';

        eye1.classList.add('fa-eye-slash');
        eye1.classList.remove('fa-eye');
    }
    else{
        pin.type = 'text';

        eye1.classList.add('fa-eye');
        eye1.classList.remove('fa-eye-slash');
    }
});
eye2.addEventListener('click',()=>{
    
    if(eye2.classList.contains('fa-eye')){
        pinAgain.type = 'password';

        eye2.classList.remove('fa-eye');
        eye2.classList.add('fa-eye-slash');
    }
    else{
        pinAgain.type = 'text';

        eye2.classList.remove('fa-eye-slash');
        eye2.classList.add('fa-eye');
    }
});
// --------------------------------password-------------------------------
const homePage = document.querySelector('#home_page');
const pin = document.querySelector('.pin');
const pinAgain = document.querySelector('.pin_again');
const nischitBtn = document.querySelector('#nischits');

pin.addEventListener('input',()=>{

    if(pin.value === pinAgain.value){
        nischitBtn.classList.add('nis_active')
    } else{
        nischitBtn.classList.remove('nis_active')
    }
});

pinAgain.addEventListener('input',()=>{

    if(pin.value === pinAgain.value){
        nischitBtn.classList.add('nis_active')
    } else{
        nischitBtn.classList.remove('nis_active')
    }
})

nischitBtn.addEventListener('click',()=>{
    homePage.setAttribute('style','top:0px;transition:0.8s ease-out');

    let pinStore = pin.value;
    let pinAgainStore = pinAgain.value;

    localStorage.setItem('Pin',pinStore);
    localStorage.setItem('Pin',pinAgainStore);

    navInfoName.innerHTML = localStorage.getItem('Name');
    navInfoNumber.innerHTML = localStorage.getItem('Number');
    ownerName.innerHTML = localStorage.getItem('Name');
    let innerLogoEl = localStorage.getItem('Name').slice(0,2);
    navNameLogo.innerHTML = innerLogoEl;
})

//-------------------------------------------------home page----------------------------------------------//
const ownerName = document.querySelector('.Name');

window.addEventListener('load',()=>{

    if(localStorage.getItem('Name') != undefined && localStorage.getItem('Pin')){
        registerSec.setAttribute('style','display:none');
        homePage.setAttribute('style','top:0px;');
    }
    else{
        registerSec.setAttribute('style','display:block');
    }
});
ownerName.innerHTML = localStorage.getItem('Name');
//---------------------------------- left nav ----------------------------

const bar = document.querySelector('.bar');
const navBar1 = document.querySelector('.nav_bar1');
const navBack = document.querySelector('.nav_bar_back');
const navNameLogo = document.querySelector('.nav_name_logo');
const navInfoName = document.querySelector('.nav_info_na');
const navInfoNumber = document.querySelector('.nav_info_num');
const logOutBtn = document.querySelector('.log_out')

bar.addEventListener('click',()=>{
    navBar1.classList.add('nav_bar1_active');
    navBack.classList.add('nav_bar_back_active')
});
navBack.addEventListener('click',()=>{
    navBar1.classList.remove('nav_bar1_active');
    navBack.classList.remove('nav_bar_back_active')
});

if(localStorage.getItem('Name') != null){
    let innerLogoEl = localStorage.getItem('Name').slice(0,2);

    navNameLogo.innerHTML = innerLogoEl;
}
else{
    let innerLogoEl = localStorage.getItem('Name');

    navNameLogo.innerHTML = innerLogoEl;
}
navInfoName.innerHTML = localStorage.getItem('Name');
navInfoNumber.innerHTML = localStorage.getItem('Number');


logOutBtn.addEventListener('click',()=>{
    localStorage.clear();
    window.location.reload();
})
// =---------------------------------Add customer -----------------------------------------------------= //

const addCustomerBtn = document.querySelector('.add_customer');
const addCustomerSec = document.querySelector('.add_customer_sec');
const add_part2 = document.querySelector('.add_part2')
const customer_sec_back = document.querySelector('.customer_sec_back');
const cal_active = document.querySelector('.cal_active');
const calculator = document.querySelector('.calculator')


addCustomerBtn.addEventListener('click',()=>{
    addCustomerSec.classList.add('add_customer_sec_active')
});
customer_sec_back.addEventListener('click',()=>{
    addCustomerSec.classList.remove('add_customer_sec_active');
    calculator.classList.remove('calculator_active');
    displayValue= '';
    Display.value = '';
    customerName.value = '';
    customerNumber.value = '';
})

cal_active.addEventListener('click',()=>{
    calculator.classList.add('calculator_active');
});


// -------claculator -----------------

const Display = document.querySelector('.display');
buttons = document.querySelectorAll('.button');
let displayValue = '';
const Delete = document.querySelector('.delete')

for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;

        if(buttonText == 'X'){
            buttonText = '*'
            displayValue += buttonText
            Display.value = displayValue;
        }
        else if(buttonText == 'AC'){
            displayValue= '';
            Display.value = ''
        }
        else if (buttonText == '='){
            Display.value = eval(displayValue)
            displayValue= '';
        }
        else{
            displayValue += buttonText
            Display.value = displayValue;
        }
    })
};

//=--------------------------------- ADD cutomer data in localStorage--------------------------------------=
    
const customerName = document.querySelector('.customer_name');
const customerNumber = document.querySelector('.customer_number');
const hisab = document.querySelector('.display');
const dataSaveBtn = document.querySelector('.dataSave')

const customer = JSON.parse(localStorage.getItem('CustomerList')) || [];

const addCustomers = (customerName , Taka,customerNumber )=>{
    
    customer.push({customerName,Taka,customerNumber});
    localStorage.setItem('CustomerList',JSON.stringify(customer));
};

dataSaveBtn.addEventListener('click',()=>{

    let name = customerName.value;
    let number = customerNumber.value;
    let pamu = hisab.value;

    addCustomers(name , pamu , number);


    let data = parseFloat(hisab.value);
    let store = JSON.parse(localStorage.getItem('Total'));
    localStorage.setItem('Total',data += store);

    takaPabo.innerHTML = localStorage.getItem('Total');

    if(localStorage.getItem('Total') == null){
        takaPabo.innerHTML = 00;
    }
    else{
        localStorage.getItem('Total');
    }


    if(localStorage.getItem('Total') == null){
        takaPabo.innerHTML = 00;
    }
    else{
        localStorage.getItem('Total');
    }

    if(localStorage.getItem('Total') !== null){
        taliPage.setAttribute('style','display:block');
        bodyWrapper.setAttribute('style','display:none');
    
    }
    else{
        taliPage.setAttribute('style','display:none');
        bodyWrapper.setAttribute('style','display:block');
    }

    
})



dataSaveBtn.addEventListener('click', () => {
    Display.value = '';
    customerName.value = '';
    customerNumber.value = '';
});



// ----------------------------------display customer data---------------------------------------------//
const takaPabo = document.querySelector('.taka_pabo');
const taliPage = document.querySelector('.tali_page');
const bodyWrapper = document.querySelector('.body_wrapper')


takaPabo.innerHTML = localStorage.getItem('Total');

if(localStorage.getItem('Total') !== null){
    taliPage.setAttribute('style','display:block');
    bodyWrapper.setAttribute('style','display:none');

}
else{
    taliPage.setAttribute('style','display:none');
    bodyWrapper.setAttribute('style','display:block');
}