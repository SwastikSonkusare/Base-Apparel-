let form = document.querySelector(".apparel__validate");
let emailValue = document.querySelector(".apparel__input");
let errorImage = document.querySelector(".apparel__error-icon");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let email = emailValue.value;

    if(!validateEmail(email)) {
        form.classList.add("error")
    } else {       
        form.classList.remove("error");
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
    }
    
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}