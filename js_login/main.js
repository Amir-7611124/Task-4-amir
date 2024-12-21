let name = document.getElementById("N");
let email = document.getElementById("EM");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let p = document.getElementsByTagName("p");

name.value = localStorage.getItem("first-name");
email.value = localStorage.getItem("email");

btn.addEventListener("click", () => {
  let flag = true;

  if (name.value !== localStorage.getItem("first-name")) {
    flag = false;
    p[0].innerHTML = `wrong name`;
    p[0].classList.remove("d-none");
  } else {
    p[0].classList.add("d-none");
  }

  if (email.value !== localStorage.getItem("email")) {
    flag = false;
    p[1].innerHTML = `wrong email`;
    p[1].classList.remove("d-none");
  } else {
    p[1].classList.add("d-none");
  }

  if (pass.value !== localStorage.getItem("password")) {
    flag = false;
    p[2].innerHTML = `wrong password`;
    p[2].classList.remove("d-none");
  } else {
    p[2].classList.add("d-none");
  }

  if (flag == true) {
    window.open("/Home.html", "_self");
  }
});
