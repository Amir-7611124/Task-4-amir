let fn = document.getElementById("FN");
let sn = document.getElementById("SN");
let em = document.getElementById("EM");
let pass = document.getElementById("Pass")
let p = document.getElementsByTagName("p");
let btn = document.getElementById("submit");

btn.addEventListener("click" , ()=> {

  let flag = true;

  if (fn.value == "") {
    p[0].innerHTML = "this field is required";
    p[0].classList.remove("d-none");

    flag = false;
  }

  else if (!isNaN(fn.value[0])) {
    p[0].innerHTML = "you must not put number in the first index";
    p[0].classList.remove("d-none");

    flag = false;
  }

  else{
    p[0].classList.add("d-none");
    flag = true;
  }

  if (sn.value == "") {
    p[1].innerHTML = "this field is required";
    p[1].classList.remove("d-none");

    flag = false;
  }

  else if(!isNaN(sn.value[0])) {
    p[1].innerHTML = "you must not put number in the first index";
    p[1].classList.remove("d-none");

    flag = false;
  }

  else{
    p[1].classList.add("d-none");
    flag = true;
  }

  if (em.value == "") {
    p[2].innerHTML = "this field is required";
    p[2].classList.remove("d-none");

    flag = false;
  }

  else if (!isNaN(em.value[0])) {
    p[2].innerHTML = "the email must not start with numbers";
    p[2].classList.remove("d-none");

    flag = false;
  }

  else if(em.value.match(/@gmail.com/g) == null) {
    p[2].innerHTML = "the email must contains (@gmail.com)";
    p[2].classList.remove("d-none");

    flag = false;
  }

  else{
    p[2].classList.add("d-none");
    flag = true;
  }

  if (pass.value == "") {
    p[3].innerHTML = "this field is required";
    p[3].classList.remove("d-none");

    flag = false;
  }

  else if (pass.value.length <= 10 ) {
    p[3].innerHTML = "the password must be equal or more than 10 characters"
    p[3].classList.remove("d-none");

    flag = false;
  }

  else{
    p[3].classList.add("d-none");
    flag = true;
  }

  console.log(flag);
  
  if(flag == true){
    localStorage.setItem("first-name", fn.value);
    localStorage.setItem("email",em.value);
    localStorage.setItem("password", pass.value);
    window.open("/login.html", "_self");

  }





})