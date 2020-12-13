$('document').ready(()=>{

console.log('body loaded');
$('#house').click(()=>{
    // console.log('house clicked')
    $("#textColorChanger , #s1 #hero-left").fadeOut()
    $("#textColorChanger , #s1 #hero-left").fadeIn(1500)
    $("#textColorChanger").text('with housemates').css('color' , '#8A5DCE');
    $('#s1 #hero-left #signUpButton').css('background-color' ,  '#8A5DCE');
    $('#lg-plane').addClass('hidden');
    $("#lg-house").removeClass('hidden');
    $('#lg-heart').addClass('hidden');
    $("#lg-star").addClass('hidden');
})
$('#plane').click(()=>{
    // console.log('plane clicked');
    $("#textColorChanger , #s1 #hero-left").fadeOut()
    $("#textColorChanger , #s1 #hero-left").fadeIn(1500)
    $("#textColorChanger").text('on trips').css('color' , '#1CC29F');
    $('#s1 #hero-left #signUpButton').css('background-color' ,  '#1CC29F');
    $('#lg-plane').removeClass('hidden');
    $("#lg-house").addClass('hidden');
    $('#lg-heart').addClass('hidden');
    $("#lg-star").addClass('hidden');
})
$('#heart').click(()=>{
    // console.log('heart clicked');

    $("#textColorChanger , #s1 #hero-left").fadeOut()
    $("#textColorChanger , #s1 #hero-left").fadeIn(1500)
    $('#textColorChanger').text('with partner').css('color' , "#A6002F");
    $('#s1 #hero-left #signUpButton').css('background-color' ,  '#A6002F');
    $('#lg-plane').addClass('hidden');
    $("#lg-house").addClass('hidden');
    $('#lg-heart').removeClass('hidden');
    $("#lg-star").addClass('hidden');
})
$('#star').click(()=>{
    console.log('star clicked');

    $("#textColorChanger , #s1 #hero-left").fadeOut()
    $("#textColorChanger , #s1 #hero-left").fadeIn(1500)
    $("#textColorChanger").text('with anyone').css('color' ,'#1CC29F');
    $('#s1 #hero-left #signUpButton').css('background-color' ,  '#1CC29F');
    $('#lg-plane').addClass('hidden');
    $("#lg-house").addClass('hidden');
    $('#lg-heart').addClass('hidden');
    $("#lg-star").removeClass('hidden');
})

});