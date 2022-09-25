const targetInput=document.getElementById("password")
const targetInputNext=document.getElementById("confirm-password")

//define variable for both eye icon and target that
const passwordEyeTarget=document.getElementById("eye-slash")
const slashPasswordEyeTarget=document.getElementById("eye-slash-container")

const passwordEyeTargetc=document.getElementById("eye-slash-c")
const slashPasswordEyeTargetc=document.getElementById("eye-slash-container-c")
const errorBlogTarget=document.getElementById('error-icon')

//target both icon when user click on that it visibile 

//reuseable function 
const UserVisibleOrHidden=(hiddenElement,visibileElement,type,input)=>{
        hiddenElement.addEventListener("click",()=>{
          visibileElement.style.display="inline";
          hiddenElement.style.display="none";
          input.type=type
          console.log(targetInput)

        
     })
}
UserVisibleOrHidden(passwordEyeTarget,slashPasswordEyeTarget,"password",targetInput)//password
UserVisibleOrHidden(slashPasswordEyeTarget,passwordEyeTarget,"text",targetInput)

UserVisibleOrHidden(passwordEyeTargetc,slashPasswordEyeTargetc,"password",targetInputNext)//password
UserVisibleOrHidden(slashPasswordEyeTargetc,passwordEyeTargetc,"text",targetInputNext)
// end here toggling button for both password

//start for button

const targetButton=document.querySelector('button')
//errorBlock-container
targetButton.addEventListener("click",()=>{
     //it's validete userfiled
     let name=document.getElementById('input').value
     let isValidName=/^[A-Za-z\s]*$/.test(name)
   //it valided email filed
   let email=document.getElementById('email').value
   let isValidEmail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
     //it valided phone number 
     let phone=document.getElementById('phone-number').value
     // let isValidPhoneNumber=/^(0|[+91]{3})?[7-9][0-9]{9}$/.test(phone)
     console.log(typeof phone)
     console.log(isValidName)
     //it valided strong password
     // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
     let password=document.getElementById('password').value
     let isValidPassword=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/.test(password)
    //it will check both password are same or not
    let confirmPassword=document.getElementById('confirm-password').value
// '12sas7'
console.log(password)

// 127 !='12sas7'
//      123='123'
     // console.log(phone.length)

     console.log()
     if(!isValidName){
          document.getElementById('errorBlock-container').innerHTML='Name only contain alphbet and space'
          errorBlogTarget.style.display='inline'
     }
    else if(!isValidEmail){
     document.getElementById('errorBlock-container').innerHTML='Enter valid email id'
     errorBlogTarget.style.display='inline'

    }
    
    else if(parseInt(phone)!=phone || phone.length!==10){
     document.getElementById('errorBlock-container').innerHTML='Enter valid Mobile Number'
     errorBlogTarget.style.display='inline'

    }
    else if(!isValidPassword){
     document.getElementById('errorBlock-container').innerHTML='Enter valid Password'
     errorBlogTarget.style.display='inline'

    }
    else if(confirmPassword!==password){
     document.getElementById('errorBlock-container').innerHTML='Password and Confim Password must be same'
     errorBlogTarget.style.display='inline'

    }
  
    
})

