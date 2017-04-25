$(document).ready(function(){
$("button").click(function(){
	console.log("Hello World");
 $.getJSON("posts.js", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });

 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
});
});

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}