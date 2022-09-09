var form = document.getElementById("contact-form");
    async function handleSubmit(event) {
      $('.btn-submit').hide()
      $('.btn-loading').show()
      event.preventDefault();
      var statusSuccess = document.getElementById("status-success");
      var statusError = document.getElementById("status-error");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          $('.alert-success').show()
          statusSuccess.innerHTML = `<b>Terimakasih</b>, pesan anda sudah sampai!`;
          form.reset()
          $('.btn-loading').hide()
          $('.btn-submit').show()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              statusError.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              $('.alert-error').show()
              statusError.innerHTML = `<b>Oops!</b>  Sepertinya ada yg gak beres nih, Tunggu beberapa saat lagi ya`
              $('.btn-loading').hide()
              $('.btn-submit').show()
            }
          })
        }
      }).catch(error => {
        $('.alert-error').show()
        status.innerHTML = `<b>Oops!</b>  Sepertinya ada yg gak beres nih, Tunggu beberapa saat lagi ya`
        $('.btn-loading').hide()
        $('.btn-submit').show()
      });
    }
    form.addEventListener("submit", handleSubmit)