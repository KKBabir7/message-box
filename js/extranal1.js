 

	

		
		
		
	
		
		
		
		
	/////////////........mobile menu modal
		
		
		function mobile(){
				var modal = document.getElementById("mobile");
				var span = document.getElementsByClassName("close")[0];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
		   
		
		
		
		
		
		



/////////////........content animate

  AOS.init();

