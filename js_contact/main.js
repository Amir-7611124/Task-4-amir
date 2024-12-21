let name = document.getElementById("Nm");
let Email = document.getElementById("Em");
let Mass = document.getElementById("Ms");
let btn = document.getElementById("butn");
let p = document.getElementsByTagName("p");

btn.addEventListener("click", ()=>{
  if(name.value =="")
  {
    p[1].innerHTML = `This field is required`
    p[1].classList.remove("d-none");
    p[1].classList.add("d-block") 
  }

  else if(!isNaN(name.value[0]))
  {
    p[1].innerHTML = `The Name shouldn't include number in the first index`
    p[1].classList.remove("d-none");
    p[1].classList.add("d-block")    
  }
  else{
    p[1].classList.add("d-none")
  }
  if(Email.value =="")
    {
      p[2].innerHTML = `This field is required`
      p[2].classList.remove("d-none");
      p[2].classList.add("d-block") 
    }

  else if(Email.value.match(/@gmail.com/g) ==  null)
  {
    p[2].innerHTML = `The Email should include (@gmail.com)`
    p[2].classList.remove("d-none");
    p[2].classList.add("d-block")    
  }
  else{
    p[2].classList.add("d-none")
  }

  if(Mass.value =="")
    {
      p[3].innerHTML = `This field is required`
      p[3].classList.remove("d-none");
      p[3].classList.add("d-block") 
    }
    else{
      p[3].classList.add("d-none")
    }
  
  }
)
