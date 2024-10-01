(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "85RIr_CItJTah_HVR",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('emailme_hc', 'template_p6zowt6', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Email Success!');
                this.reset();

            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

