// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxVcemfIeFx_22TgwOuumAW_5NynCBtjs",
  authDomain: "satagro-projekt.firebaseapp.com",
  databaseURL: "https://satagro-projekt-default-rtdb.firebaseio.com",
  projectId: "satagro-projekt",
  storageBucket: "satagro-projekt.appspot.com",
  messagingSenderId: "1026722118960",
  appId: "1:1026722118960:web:3393e69dafee84d2cc1cf5",
  measurementId: "G-42PLC3JT4F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let ref = firebase.database().ref('/plans')

function getDataPromise() {
  return ref.once('value').then(function (snapshot) {
    return snapshot.val();
  });
}

let res = getDataPromise()
res.then(data => {
  let poland, czechRepublic, slovakia, lithuania;
  poland = document.querySelector("#PL");
  czechRepublic = document.querySelector("#CZ");
  slovakia = document.querySelector("#SK");
  lithuania = document.querySelector("#LT");

  lithuania.addEventListener("click", functionLT);
  poland.addEventListener("click", functionPL);
  czechRepublic.addEventListener("click", functionCZ);
  slovakia.addEventListener("click", functionSK);

  function functionCZ() {
    document.querySelector("#plans").innerHTML = `<p>Lorem ipsum dolor</p><div>COUNTRY CODE: ${data[0].region}</div><div>PLAN: ${data[0].plan.name}</div><div>YEARLY RATE: ${data[0].yearly_rate} ${data[0].currency_symbol}</div>`
  }
  function functionLT() {
    document.querySelector("#plans").innerHTML = `<p>Lorem ipsum dolor</p><div>COUNTRY CODE: ${data[1].region}</div><div>PLAN: ${data[1].plan.name}</div><div>YEARLY RATE: ${data[1].yearly_rate} ${data[1].currency_symbol}</div>`
  }
  function functionSK() {
    document.querySelector("#plans").innerHTML = `<p>Lorem ipsum dolor</p><div>COUNTRY CODE: ${data[2].region}</div><div>PLAN: ${data[2].plan.name}</div><div>YEARLY RATE: ${data[2].yearly_rate} ${data[2].currency_symbol}</div>`
  }
  function functionPL() {
    document.querySelector("#plans").innerHTML = `<p>Lorem ipsum dolor</p><div>COUNTRY CODE: ${data[3].region}</div><div>PLAN: ${data[3].plan.name}</div><div>YEARLY RATE: ${data[3].yearly_rate} ${data[3].currency_symbol}</div>`
  }
})

function dropdownShow() {
  dropdownCountries.classList.toggle("show");
}
function filterFunction() {
  let input, filter, a, dropdownCountries;
  dropdownCountries = document.querySelector("#dropdownCountries")
  input = document.querySelector("#dataInput");
  filter = input.value.toUpperCase();
  div = dropdownCountries;
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}