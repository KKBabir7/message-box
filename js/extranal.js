// copy clipbord
$(function(e){
        new Clipboard('.copy-text');
				  
    });
//right  side menu for refress animimation
$(function(){
         
          $('.menu-content li').click(function() {
                $('.menu-content li.mobile-active').removeClass('mobile-active');
                $('.menu-content li .bi-arrow-repeat').removeClass('bi-arrow-repeat');
                $(this).addClass('mobile-active');
                $('.menu-content li.mobile-active .lki').addClass('bi-arrow-repeat');
                $('.menu-content li.mobile-active .lki').addClass('refress');
                setTimeout(function(){
			        $('.menu-content li.mobile-active .lki').removeClass('refress');
		            },1000)
				 });
});
//add folder modal
function folder(){
				var modal = document.getElementById("myModal");
				var btncencel = document.getElementById("btncencel");
				var span = document.getElementById("close-floder");
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				 
				}
				btncencel.onclick = function() {
				  modal.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
//add label modal
function label(){
				var myLabel = document.getElementById("myLabel");
				var btncencell = document.getElementById("btncencell");
				var span1 = document.getElementById("close-label");
				  myLabel.style.display = "block";
				span1.onclick = function() {
				  myLabel.style.display = "none";
				}
				btncencell.onclick = function() {
				  myLabel.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == myLabel) {
					myLabel.style.display = "none";
				  }
				}
				return false;
				}

// add sendbit itroduction modal
function sintro(){
				var myintro = document.getElementById("myintro");
				
				var span2 = document.getElementById("close-intro");
				  myintro.style.display = "block";
				span2.onclick = function() {
				  myintro.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == myLabel) {
					myintro.style.display = "none";
				  }
				}
				return false;
				}
// add composer delete modal
function deleteBtn(){
				var deleteBtn = document.getElementById("deleteBtn");
				var deleteBtncencell = document.getElementById("deleteBtncencell");
				var span3 = document.getElementById("close-delete");
				  deleteBtn.style.display = "block";
				span3.onclick = function() {
				  deleteBtn.style.display = "none";
				}
				deleteBtncencell.onclick = function() {
				  deleteBtn.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == deleteBtn) {
					deleteBtn.style.display = "none";
				  }
				}
				return false;
				}
//add composer exprition modal
function exprition(){
				var exprition = document.getElementById("exprition");
				var expritioncencell = document.getElementById("expritioncencell");
				var span4 = document.getElementById("close-exprition");
				  exprition.style.display = "block";
				span4.onclick = function() {
				  exprition.style.display = "none";
				}
				expritioncencell.onclick = function() {
				  exprition.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == exprition) {
					exprition.style.display = "none";
				  }
				}
				return false;
				}

//add composer encryption modal
function encrypt(){
				var encrypt = document.getElementById("encrypt");
				var encryptcencell = document.getElementById("encryptcencel");
				var span5 = document.getElementById("close-encrypt");
				  encrypt.style.display = "block";
				span5.onclick = function() {
				  encrypt.style.display = "none";
				}
				encryptcencell.onclick = function() {
				  encrypt.style.display = "none";
				}
				
				window.onclick = function(event) {
				  if (event.target == encrypt) {
					encrypt.style.display = "none";
				  }
				}
				return false;
				}
//tootlip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//all dropdown menu stopPropagation

$('.navbar-left .dropdown-menu option,.navbar-left .dropdown-menu select').click(function(e) {
        e.stopPropagation();
});

$('.navbar-left .radio').click(function(e) {
        e.stopPropagation();
});

$('.navbar .navbar-right  .user .dropdown-menu .none-ui').click(function(e) {
        e.stopPropagation();
});

$('.label-drop-menu').click(function(e) {
        e.stopPropagation();
});


//email copy token
function klem() {
    var xt = document.getElementById("copiedem");
  xt.className = "show";
  setTimeout(function(){ xt.className = xt.className.replace("show", ""); }, 3500);
	}		
			

//profile dorpdown subdropdown hover menu
$('.dropdown-submenu').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});



//dropdown search one
function mysearch() {
    var myInputsearch, filter, ul, li, a, i, txtValue;
    myInputsearch = document.getElementById("myInputsearch");
    filter = myInputsearch.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


//dropdown search tow
function mysearchlavel() {
    
    myInputlabel = document.getElementById("myInputlabel");
    filterl = myInputlabel.value.toUpperCase();
    ul = document.getElementById("myULl");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValuel = a.textContent || a.innerText;
        if (txtValuel.toUpperCase().indexOf(filterl) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//checkbox-input dropdown-menu selection one menu
$(function() {
    $(".checkone .checkbox-input").click(function(){
        $('.checkone .deleteone').prop('disabled',$('.checkone input.checkbox-input:checked').length == 0);
    });
});

//checkbox-input dropdown-menu selection one tow
$(function() {
    $(".addk .checkbox-input").click(function(){
        $('.addk .deletetow').prop('disabled',$('.addk input.checkbox-input:checked').length == 0);
    });
});


//checkbox-input dropdown-menu selection one three
$(function() {
    $(".flilter-box .checkbox-input").click(function(){
        $('.flilter-box .deletethree').prop('disabled',$('.flilter-box input.checkbox-input:checked').length == 0);
    });
});


//doropdown menu page number value input
$(".icon-navbar .navbar-right  .dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.pagenumber').html($(this).text()  + ' <i style="font-size:13px;" class="bi bi-chevron-down"></i>');
   $( '.icon-navbar .navbar-right .dropdown-menu' ).find( 'li a.active' ).removeClass( 'active' );
  $(this).addClass('active');
  $(this).parents(".dropdown").find('.pagenumber').val($(this).data('value'));
});



//doropdown menu old new message input
$(".all-read-msg .btn-group .dropdown-menu li a").click(function(){
  $(this).parents(".btn-group").find('.msg-value-all').html($(this).text() + ' <i class="bi bi-arrow-down-up"></i>');
  $( '.all-read-msg .btn-group .dropdown-menu' ).find( 'li a.active' ).removeClass( 'active' );
  $(this).addClass('active');
  
  $(this).parents(".btn-group").find('.msg-value-all').val($(this).data('value'));
});


//tab active or side allmessage
$(".tab-content .nav-tabs li").click(function() {
  $(".tab-content .nav-tabs li ").removeClass('active');
   
});



//tab or side allmessage  checkbox-input
$('.tab-content  [data-toggle="tab"]  .roundchk').click(function() {
    var isChecked = $(this).find(':checkbox').prop('checked');
    $(this).find(':checkbox').prop('checked', !isChecked);
})


//all star unster
$('.fa-star').click(function() {

  
  if($('.fa-star').hasClass('far')){
  
   $(this).attr('data-original-title', 'Unstar conversation<br><b>*</b>');
  }
  if($('.fa-star').hasClass('fas')){
  $(this).attr('data-original-title', 'Star conversation<br><b>*</b>');
  }
$(this).toggleClass('far fas')
 
  
    return false;
  

})




//mobile menu message left back and right back
$('.right-tab-content li').click(function() {
if (window.matchMedia('(max-width: 992px)').matches) {
$(".body-side-col").css("display", "none");
$(".navbar-left .leftback").css("display", "block");
$(".navbar-left .leftbackbox").css("display", "none");
$(".body-ridecol").css("display", "block");
$(".number-transfer").css("display", "none");
   }
})
$('.navbar-left .leftback').click(function() {
if (window.matchMedia('(max-width: 992px)').matches) {
    $(".body-side-col").css("display", "block");
	$(".navbar-left .leftback").css("display", "none");
    $(".navbar-left .leftbackbox").css("display", "block");
    $(".body-ridecol").css("display", "none");
	$(".number-transfer").css("display", "block");
	}
})





//side message menu checkbox selection
 $(document).ready(function() {

  $('.icon-navbar .navbar-left .customcheck  #somebox').change(function() {
    var checked = $(this).is(":checked");
    if (checked) {
      $('.tab-content  [data-toggle="tab"]  .roundchk .someboxSub').each(function() {
        $(this).prop("checked", true);
      });
    } else {
      $('.tab-content  [data-toggle="tab"]  .roundchk .someboxSub').each(function() {
        $(this).prop("checked", false);
		
      });
    }
  });

 
  $('.tab-content  [data-toggle="tab"]  .roundchk ').click(function() {
    if ($('.tab-content  [data-toggle="tab"]  .roundchk .someboxSub').length == $('.tab-content  [data-toggle="tab"]  .roundchk .someboxSub:checked').length) {
      $(".icon-navbar .navbar-left .customcheck #somebox").prop("checked", true);
    } else {
      
      $(".icon-navbar .navbar-left .customcheck #somebox").prop("checked", false);
    }
	return false;
  });
  
});




//composer or message box 
$(document).on('click', '.panel-heading #minim_chat_window', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('bi-dash').addClass('bi-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('bi-plus').addClass('bi-dash');
		
    }
});



$("#newMsgComposer").on("click", function() {
  $(".chat-window").addClass("active"); 
  $(".chat-window").removeClass("clickopacity");
  if (window.matchMedia('(max-width: 682px)').matches) {
  $(".nav-side-menu .massage").css("display","none"); 
  }
   

			
});
 $(".icon-navbar,.main-navbar,.body-side,.nav-side-menu .brand,.menu-list").on("click",function(){
  
	 $(".chat-window").addClass("clickopacity");

	
});
$(".chat-window").on("click",function(){
     $(".chat-window").removeClass("clickopacity");
});	

$(".bi-x").on("click", function() {
  $(".chat-window").removeClass("active");
  $(".chat-window").removeClass("clickopacity");
  if (window.matchMedia('(max-width: 682px)').matches) {
  $(".nav-side-menu .massage").css("display","block"); 
  }
});


(function() {
	var content =
		"<p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzC_Ho_08G0m7PyxJOPLpPujM9UTLxvaE-5nXewscnqa3GMWjGwg' alt='Image result for summernote.js'></p><h1>Summernote</h1>";
	var $sumNote = $("#ta-1")
		.summernote({
			callbacks: {
				onPaste: function(e,x,d) {
					$sumNote.code(($($sumNote.code()).find("font").remove()));
				}
			},

			dialogsInBody: true,
			dialogsFade: true,
			disableDragAndDrop: true,
			disableResizeEditor:true,
			height: "150px",
			tableClassName: function() {
				alert("tbl");
				$(this)
					.addClass("table table-bordered")

					.attr("cellpadding", 0)
					.attr("cellspacing", 0)
					.attr("border", 1)
					.css("borderCollapse", "collapse")
					.css("table-layout", "fixed")
					.css("width", "100%");

				$(this)
					.find("td")
					.css("borderColor", "#ccc")
					.css("padding", "4px");
			}
		})
		.data("summernote");

	
	$("#btn-get-content").on("click", function() {
		var y =$($sumNote.code());
	
		console.log(y[0]);console.log(y.find("p> font"));
	var x = y.find("font").remove();		
		$("#content").text($("#ta-1").val());
	});
	
	$("#btn-get-text").on("click", function() {
		$("#content").html($($sumNote.code()).text());
	});
	
	$("#btn-set-content").on("click", function() {
		$sumNote.code(content);
	});
	$("#btn-reset").on("click", function() {
		$sumNote.reset();
		$("#content").empty();
	});
})();



//composer or message bcc ccc
  function tobcc(){
    var tobccnone=document.getElementById('tobccnone')
    var limbs = document.getElementsByClassName('lab-rog');
    var tobcc90=document.getElementById('tobcc90')
    if(tobccnone){
    document.getElementById('cc-em').style.display="block"
    document.getElementById('bcc-em').style.display="block"
    tobcc90.style.display="block"
    tobccnone.style.display="none"
	 for (let item of limbs) {
            item.style.color = '#1578cf'; 
            }

    
	tobcc90.onclick=function(){
	document.getElementById('cc-em').style.display="none"
    document.getElementById('bcc-em').style.display="none"
    tobcc90.style.display="none"
    tobccnone.style.display="block"
	for (let item of limbs) {
            item.style.color = 'rgba(0,0,0,0.9)'; 
            }
	}
  }
 

  }




//composer or message box Encryption password eye one
let passwordInput = document.getElementById('txtPassword'),
    toggle = document.getElementById('btnToggle'),
    icon =  document.getElementById('eyeIcon');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.add("fa-eye-slash");
    
  } else {
    passwordInput.type = 'password';
    icon.classList.remove("fa-eye-slash");
   
  }
}
toggle.addEventListener('click', togglePassword, false);




//composer or message box Encryption password eye tow
let passwordInputc = document.getElementById('txtPasswordc'),
    togglec = document.getElementById('btnTogglec'),
    iconc =  document.getElementById('eyeIconc');

function togglePasswordc() {
  if (passwordInputc.type === 'password') {
    passwordInputc.type = 'text';
    iconc.classList.add("fa-eye-slash");
    
  } else {
    passwordInputc.type = 'password';
    iconc.classList.remove("fa-eye-slash");
    
  }
}
togglec.addEventListener('click', togglePasswordc, false);



//composer or message box Encryption password button disable enable
 function encryptbtn(){
	   let ppone=document.getElementById("txtPassword").value;
	   let pponec=document.getElementById("txtPasswordc").value;
	  
	    if((ppone.length>7)&&(pponec.length>7)){
		document.getElementById("setpass").disabled = false;
		}
	 else{
	    document.getElementById("setpass").disabled = true;
	 
	 }
	}	
function encryptbtnc(){
	   let pponee=document.getElementById("txtPassword").value;
	   let pponecc=document.getElementById("txtPasswordc").value;
	  
	    if((pponee.length>7)&&(pponecc.length>7)){
		document.getElementById("setpass").disabled = false;
		}
	 else{
	    document.getElementById("setpass").disabled = true;
	 
	 }
	}	



//for mobile composer or message box displaying
function closeNav() {
  document.getElementById("navsidemenu").style.width = "100%";
  document.getElementById("exxomposer").style.display = "none";
  document.getElementById("newMsgComposer").style.display = "none";
}
function openNav() {
  document.getElementById("navsidemenu").style.width = "0";
  document.getElementById("exxomposer").style.display = "block";
  document.getElementById("newMsgComposer").style.display = "block";
}







