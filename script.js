// // alert("hello");
// var doc = document.querySelector(".container");
// for(var i=0;i<100;i++){

// // doc.classList.add(".box");
// doc.className += " " + "box";
// }
// var dom = document.querySelector(".box");
// for(var i=0;i<50;i++){
// 	dom.style.background = "#ffffff";
	
// }
// for(var i=50;i<100;i++){
// 	dom.style.background = "#fff65a";
	
// }

// var color = $(".menu").
// $( function() {
//     $( "#menu" ).menu();
//   } );
drawSheet();
function drawSheet(){

for (i=0; i < 128; i++){
   			$('<div>').addClass('square-line').appendTo(".container");
   		};
for (j=0; j < 128; j++){
    		$('<div>').addClass('square').css("width",600/128).css("height",600/128).appendTo(".square-line");
		};


}


// $('#colors').on('change',function(){
// 	var color = $('#colors option:selected').val();
// 	switch(color){
// 		case 'black':
// 		$('.square').on('click',function(){
// 			$(this).css("background-color",color = 'black');
// 		});
// 	}
// });
var chosencolor;
 var picker = new CP(document.querySelector('input'));
// var color = document.querySelector('input');
    picker.on("change", function(color) {
        this.target.value = '#' + color;
        
        chosencolor = this.target.value;
        this.target.value = "";
        $(this.target).css('background-color',color = chosencolor);
        console.log(this.target.value);
    });
    $('.square').on('click mouseover', function () {
        // Do something for both
  
        $(this).css("background-color",color = chosencolor);
   
    });

    // $('.square').live('click hover', function () {
    //     // common operation
    //     $(this).css("background-color",color = chosencolor);
    //    });

    // $('.square').bind('click hover', function () {
    //     // common operation
    //     $(this).css("background-color",color = chosencolor);
    //    });

    // $('.square').on('click',function(){
    // 	console.log("clicked");
    // 	$(this).css("background-color",color = chosencolor);
    // });
$('#reset').on('click',function(){
for(var i=0;i<16;i++){
for(var j=0;j<16;j++){
    $('.square').css("background-color",color = '#ffffff');
}
}
});