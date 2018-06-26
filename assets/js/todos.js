
//Click on the li
$("ul").on("click","li",function(){
	$(this).toggleClass("styles");

});

//remove the li element
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});

	event.stopPropagation();

});

//selecting the input and getting the content if it and add the value to do list
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
	//grab the value of the text in a variable
	var todoText = $(this).val();
	$(this).val("");
	//introducing the new method append
	$("ul").append("<li> <span><i class='fas fa-trash'></i></span> " +todoText +"</li>");
	}
});

$(".fa-edit").on("click",function(){
	$(this).css("cursor","pointer");
	$("input[type='text']").fadeOut().toggle();
});