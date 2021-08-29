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

    // let name = localStorage.getItem('Name');
    // if (name == null){
    //     noteObj = [];
    // }
    // else{
    //     noteObj = JSON.parse(name)
    // }
    // noteObj.push(regInput[0].value)
    // localStorage.setItem('Name',JSON.stringify(noteObj));
    // regInput[0].value = '';


    // let number = localStorage.getItem('Number');
    // if (number == null){
    //     noteObjnu = [];
    // }
    // else{
    //     noteObjnu = JSON.parse(number)
    // }
    // noteObjnu.push(regInput[1].value)
    // localStorage.setItem('Number',JSON.stringify(noteObjnu));
    // regInput[1].value = '';

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

    if(localStorage.getItem('Name') != undefined){
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
// =------------------------------Add customer ---------------------= //

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
})

cal_active.addEventListener('click',()=>{
    calculator.classList.add('calculator_active');
});


// --------------------------------------------claculator -------------------------------------------------

const numbers = document.querySelectorAll('.number');
let claculatorDisplay = document.querySelector('.display');
const oparetiors = document.querySelectorAll('.oparetor');
const allClear = document.querySelector('.all_clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');


let dis1 = '';
let dot = false;
let result = null;
let oparetionName = '';

numbers.forEach(num =>{
    num.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !dot){
            dot = true
        }
        else if(e.target.innerText === '.' && dot){
            return
        }
        dis1 += e.target.innerText;
        claculatorDisplay.value = dis1;
        console.log(dis1)
    })
    
});

oparetiors.forEach(opare =>{
    opare.addEventListener('click',(e)=>{
        dis1 += e.target.innerText
        claculatorDisplay.value = dis1
    })
});

function mathOparetion(){
     
    if(oparetionName === 'X'){
        result = parseFloat(result) * parseFloat(dis1)
    }
    else if(oparetionName === '/'){
        result = parseFloat(result) / parseFloat(dis1)
    }
    else if(oparetionName === '+'){
        result = parseFloat(result) + parseFloat(dis1)
    }
    else if(oparetionName === '-'){
        result = parseFloat(result) - parseFloat(dis1)
    }
}


equalBtn.addEventListener('click',()=>{
    
})

allClear.addEventListener('click',()=>{
    dis1 = '';
    claculatorDisplay.value = '';
});

