class ContactForm {
  constructor(el) {
    this.element = el || null;
    this.action = el.action;
    this.fields = Object.keys(el.elements).reduce((obj, key) => {
      if (key === el.elements[key].id && key !== 'btn-reset-form' && key !== 'born') obj[key] = el.elements[key];
      return obj;
    }, {});
    //console.log("Contact Form:", this);
  }

  init() {
      this.element.addEventListener("submit", (event) => this.onSubmit(event));
  }

  onSubmit(event) {
    event.preventDefault();
    let x = document.querySelector(".born").value;
    if ( x == "" || x == null ){ // it's a hu-mon
      this.element.classList.remove("contact-form--errors");
      this.element.classList.remove("contact-form--sent");
      this.element.classList.add("contact-form--loading");
      this.sendFormData(this.getFormData())
        .then((response) => {
          if (response.status === 200) {
            return response.json().then((res) => this.onSent(res));
          } else {
            throw "An error occured while submitting the form";
          }
        })
        .catch((err) => this.onError(err));
    }else{
      $('#mdlAlert').modal('show');
      $('#mdl-body-alert').text('Thanks, Message sent successfully');
      $('#btn-reset-form').click();
      return false;
    }
  }

  onSent(response) {
    $('#mdlAlert').modal('show')
    console.log("Sent:", response.success);
    $('#mdl-body-alert').text('Message sent successfully');
    $('#btn-reset-form').click();
  }

  onError(err = "") {
    this.element.classList.remove("contact-form--loading");
    this.element.classList.add("contact-form--errors");
    console.error("Error:", err);
  }

  sendFormData(data = {}) {
    return new Promise((resolve, reject) => {
      console.log("Send Data:", data);
      fetch(this.action, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  }

  getFormData() {
    let formData = {},
      values = [];

    Object.keys(this.fields).forEach((key) => {
      formData[key] = this.fields[key].value;
    });
    return formData;
  }
}

// Create a new instance of the ContactForm class
const form = new ContactForm(document.querySelector(".contact-form"));

// Initialise our instance of the ContactForm class when document has loaded
window.onload = (event) => form.init();