const urlParams = new URLSearchParams(window.location.search);
const successParam = urlParams.get('success');
const errorParam = urlParams.get('error');

if (successParam === 'true') {
    swal("Success", "Your message was successfully sent!", "success")
        .then((value) => {
            window.location.href = 'index.html'; 
        });
} else if (successParam === 'false' && errorParam) {
    swal("Error", "Message could not be sent. " + decodeURIComponent(errorParam), "error");
}