$(document).ready(() => {
    $('body').on('focus', 'input' , e => {
        $(e.target).removeClass('desfocado')
        $(e.target).addClass('focado')
    })

    $('body').on('blur', 'input' , e => {
        $(e.target).removeClass('focado')
        $(e.target).addClass('desfocado')
    })

    $('body').append('<br><br><input type="text" class="desfocado" />')

    //$('body').off('blur', 'input')
})