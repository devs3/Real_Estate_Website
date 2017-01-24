/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";

	
}
// toggle between the tabs of header
$(document).ready(function(){
	$(document).on('click','.signup-tab',function(e){
		e.preventDefault();
	    $('#signup-taba').tab('show');
	});	
	
	$(document).on('click','.signin-tab',function(e){
	   	e.preventDefault();
	    $('#signin-taba').tab('show');
	});
	    	
	$(document).on('click','.forgetpass-tab',function(e){
	 	e.preventDefault();
	   	$('#forgetpass-taba').tab('show');
	});
});	