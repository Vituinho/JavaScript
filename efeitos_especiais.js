$(document).ready(() => {
	//$('#div1').hide('slow/medio/fast/1000')
    //$('#div1').show('slow/medio/fast/1000')
    //$('#div1').toggle('slow/medio/fast/1000')

    $('#btn1').on('click', () => {
        $('#div1').toggle('fast');
    })

    $('#btn2').on('click', () => {
        $('#div2').fadeToggle('slow, 0.5');
    })

    $('#btn3').on('click', () => {
        $('#div3').slideToggle('slow');
    })

    /*
    $('#btn2').on('click', () => {
        $('#div2').toggle('medio');
    })
    $('#btn3').on('click', () => {
        $('#div3').toggle('slow');
    }) */

    //$('#div2').fadeOut('slow');
    //$('#div2').fadeIn('slow');
    //$('#div2').fadeToggle('slow');
    //$('#div2').fadeTo('slow' , 0.3);
    //$('#div2').fadeTo('slow' , 0.8);
    //$('#div3').slideUp('slow')
    //$('#div3').slideDown('slow')
    //$('#div3').slideToggle('slow')

    
 
})