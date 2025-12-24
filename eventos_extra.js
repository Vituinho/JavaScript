$(document).ready(() => {

    $('#btn2').on('click', () => {
        alert('BTN 2 clicado');
    })

    $('#btn1').on('click', () => {
        $('#btn2').trigger('click')
    })

    /*
    $('#div1').hover(
        e => $(e.target).addClass('emDestaque'),
        e => $(e.target).removeClass('emDestaque') 
    )*/

    $('#div').hover(
        e => $(e.target).toggleClass('emDestaque')
    )

    $('#div1').on('mouseenter', e => {
        $(e.target).addClass('emDestaque')
    })

    $('#div1').on('mouseleave', e => {
        $(e.target).removeClass('emDestaque')
    })
})