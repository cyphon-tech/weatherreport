// const inputs = document.querySelectorAll(".input");


// function addcl(){
// 	let parent = this.parentNode.parentNode;
// 	parent.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });



   
var password =Document.getElementById('password');
var flag=1;
function check(elem){

  if(elem.value.length>0){
    if(elem.value!= password.value){
      document.getElementById('alert').innerText="confirm password does not match";
      flag=0;
    }else{
      document.getElementById('alert').innerText="";
      flag=1;
    }
}
    else{
    
      document.getElementById('alert').innerText="please enter confirm passwod";
      flag=0;
    }
  }

  function validate()
  {
    if(flag==1)
    {
      return true;
    }else
    {
      return false;
    }
  }
