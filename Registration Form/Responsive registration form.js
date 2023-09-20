const form = document.querySelector("#registrationForm");
 const errorMessage = document.querySelector("#errorMessage");

    const firstnameinput = document.querySelector("#firstname");
    const lastnameinput = document.querySelector("#lastname");
    const emailinput = document.querySelector("#email");
    const phonenumberinput = document.querySelector("#phonenumber");
    const passwordinput = document.querySelector("#password");
    const confirmpasswordinput = document.querySelector("#confirmpassword");
    const genderinput = document.querySelector("#gender");


    form.addEventListener("submit",function(event){
        
       if (!validateInput()){
        event.preventDefault();
       }
    })

               //    validate Input

    function validateInput(){
        const firstnamevalue = firstname.value.trim()
        const lastnamevalue = lastname.value.trim()
        const emailvalue = email.value.trim()
        const phonenumbervalue = phonenumber.value.trim()
        const passwordvalue = password.value.trim()
        const confirmpasswordvalue = confirmpassword.value.trim()
        const gendervalue = gender.value.trim()
        let success=true

        if(firstnamevalue===''){
            success=false;
            setError(firstname,'Firstname is required')
        }
        else{
            setSuccess(firstname)
        }

        if(lastnamevalue===''){
            success=false;
            setError(lastname,'Lastname is required')
        }
        else{
            setSuccess(lastname)
        }

        if(emailvalue===''){
            success=false;
            setError(email,'Email is required')
        }
        else if(!validateEmail(emailvalue)){
            setError(email,'Please enter a valid email')
        }
        else{
            setSuccess(email)
        }

        if(phonenumber===''){
            success=false;
        setError(phonenumber,'phonenumber is required')
        }
        else if(phonenumbervalue.length<10){
            setError(phonenumber,'Phonenumber must be atleast 10 charaters ')
        }
        else{
            setSuccess(phonenumber)
        }

        if(password===''){
            success=false;
            setError(password,'password is required')
            }
            else if(passwordvalue.length<8){
                setError(password,'Password must be atleast 8 charaters ')
            }
            else{
                setSuccess(password)
            }

            if(confirmpassword===''){
                success=false;
                setError(confirmpassword,'Confirm password is required')
                }
                else if(confirmpasswordvalue.length<8){
                    setError(confirmpassword,'Password does not match ')
                }
                else{
                    setSuccess(confirmpassword)
                }

                if(gendervalue===''){
                    success=false;
                    setError(gender,'Gender is required')
                }
                else{
                    setSuccess(gender)
                }
                return success;
  }

    function setError(element,message){
        const userinputbox = element.parentElement;
        const errorElement =userinputbox.querySelector('.error')

        errorElement.innerText = message;
        userinputbox.classList.add('error')
        userinputbox.classList.remove('success')
    }

    function successError(element,){
        const userinputbox = element.parentElement;
        const errorElement =userinputbox.querySelector('.error')

        errorElement.innerText = '';
        userinputbox.classList.add('success')
        userinputbox.classList.remove('error')
    }

    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
    };




