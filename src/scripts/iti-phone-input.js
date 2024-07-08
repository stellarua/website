import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils.js';

const inp = document.querySelector("#inpTel");
intlTelInput(inp, {
  initialCountry: "auto",
  showSelectedDialCode: true,
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "intl-tel-input/build/js/utils.js"
});