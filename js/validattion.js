//sign-up validation
            function signp() {
              var email = 
                document.RegForm.email;
               var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
				if ((email.value=="") || !(filter.test(email.value))) {
				   document.getElementById("wrongemail").innerHTML="That doesn't look like an email address."
				   document.getElementById("emailborder").style.border="1px solid #fa7e7e"
					return false;
				}
				else{
				document.getElementById("wrongemail").innerHTML=""
				document.getElementById("emailborder").style.border="1px solid #4BC057"
				}
				 var passwordd = document.RegForm.password;
				if ((passwordd.value == "") || (passwordd.value.length<8)) {
					document.getElementById("wrongpass").innerHTML="Password must be length 8";
					document.getElementById("pass").style.border="1px solid #fa7e7e"
                    return false;
                }
				else{
				document.getElementById("wrongpass").innerHTML="";
				document.getElementById("pass").style.border="1px solid #4BC057"
				}
				
				 var repasswordd = document.RegForm.repassword;
				if ((passwordd.value == "") || !((passwordd.value)==(repasswordd.value))) {
					document.getElementById("wrongrepass").innerHTML="Password does not match";
					document.getElementById("repass").style.border="1px solid #fa7e7e"
					
                    return false;
                }
				else{
				document.getElementById("wrongrepass").innerHTML="";
				document.getElementById("repass").style.border="1px solid #4BC057"
				}
				var check = document.RegForm.check;
				if (!(check.checked)){
					document.getElementById("wrongrcheck").innerHTML="Please agree with us";
                    return false;
                }
				else{
				document.getElementById("wrongrcheck").innerHTML="";
				
				}
				
				
       return true;
   }
 


//log form validation
				function log() {
              var email = 
                document.LogForm.email;
               var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
				if ((email.value=="") || !(filter.test(email.value))) {
				   document.getElementById("wrongemail").innerHTML="This email does not exit in database"
				   document.getElementById("emailborder").style.border="1px solid #fa7e7e"
					return false;
				}
				else{
				document.getElementById("wrongemail").innerHTML=""
				document.getElementById("emailborder").style.border="1px solid #4BC057"
				
				}
				 var passwordd = document.LogForm.password;
				if ((passwordd.value == "") || (passwordd.value.length<8)) {
					document.getElementById("wrongpass").innerHTML="Password must be length 8";
					document.getElementById("Inputpass").style.border="1px solid #fa7e7e"
                    return false;
                }
				else{
				document.getElementById("wrongpass").innerHTML="";
				document.getElementById("Inputpass").style.border="1px solid #4BC057"
				
				}
		
       return true;
   }

//forgate validation
				function forget() {
              var email = 
                document.forgateForm.email;
               var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
				if ((email.value=="") || !(filter.test(email.value))) {
				   document.getElementById("wrongemail").innerHTML="This email does not exit in database"
				   document.getElementById("emailborder").style.border="1px solid #fa7e7e"
					return false;
				}
				else{
				document.getElementById("wrongemail").innerHTML=""
				document.getElementById("emailborder").style.border="1px solid #4BC057"
				
				}
				
				
				
				
				
       return true;
   }


				
					