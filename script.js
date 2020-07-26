// document.getElementById('phonePlus').addEventListener('click',function(){
//     handleProductChange(true);
// })

// document.getElementById('phoneMinus').addEventListener('click', function(){
//     handleProductChange(false);
// })
function handleProductChange(isIncrease){
    const phoneInput = document.getElementById('phoneInput');
    const phoneCount = parseFloat(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount > 0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phonePrice = phoneNewCount * 1219;
    document.getElementById('phonePrice').innerText = phonePrice;
}

// document.getElementById('phonePlus').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phoneInput');
//     const phoneCount = parseFloat(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phonePrice').innerText = phonePrice;
// })

// document.getElementById('phoneMinus').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phoneInput');
//     const phoneCount = parseFloat(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phonePrice').innerText = phonePrice;
// })
