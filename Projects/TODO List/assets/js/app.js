// Check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(){
    alert("clicked");
});
