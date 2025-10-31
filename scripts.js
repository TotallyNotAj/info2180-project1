/* Add your JavaScript to this file */
window.onload = function(){

    const newsletterform = document.querySelector('.newsletter form');
    const emailaddress = newsletterform.querySelector('input[type="email"]');
    const messagediv = document.querySelector('.message');

    newsletterform.addEventListener('submit', function(e){
        e.preventDefault();

        let email = emailaddress.value.trim();
        if(!email){
            messagediv.textContent = "Please enter a valid email address.";
        } else{
            messagediv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
};