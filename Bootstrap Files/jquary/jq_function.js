// $(document).ready(function(){
//     $('button').dblclick(function(){
//         $('p').hide();
//     });
//     $('#btnshow').click(function(){
//         $('p').show();
//     });
//     // $('*').click(function(){
//     //     $('p').hide();
//     // });
//     // $('button').click(function(){
//     //     $('this').hide();
//     // });
//     // $('p').mouseenter(function(){
//     //     alert("Your Mouse Enter In Paraghraph.")
//     // });
//     // $('p').mouseleave(function() {
//     //    alert(" Mouse leave") 
//     // });
//     // $('p').mousedown(function() {
//     //        alert(" Mouse leave") 
//     //     });
//     // $('p').mouseup(function() {
//     //         alert(" Mouse leave") 
//     // });
    
// });


$(document).ready(function(){
    $('p').on({
        mouseenter:function(){
            $(this).css("background-color", "yellow");
        },
        mouseleave:function(){
            $(this).css("background-color", "pink");
        },
        click:function(){
            $(this).css("background-color", "red");
        }
        
    });
});