$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#create').on('pageinit', function(){

		var form = $('#userForm');
		    form.validate({
			invalidHandler: function(form, validator) {
				
			},
			submitHandler: function() {
		var data = form.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var newKey = Math.floor(Math.random()*1000001111);
    localStorage.setItem(newKey, JSON.stringify(data));
    alert("You Have Created A New User!");
    window.location.reload();
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
$('#clear').click(function(){
	window.location.reload();
});
// write your javascript in here