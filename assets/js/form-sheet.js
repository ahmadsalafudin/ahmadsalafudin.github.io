const form = document.forms['contact-form']
const btnKirim = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const alertSuccess = document.querySelector('.alert-success')
const alertFail = document.querySelector('.alert-fail')
    form.addEventListener('submit', e => {
      e.preventDefault()
      var status = document.getElementById("contact-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    })