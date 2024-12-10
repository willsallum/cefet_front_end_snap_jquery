
$('.marcacao').mouseover((e) => {
    let $texto = $(e.target);
    $('#balaozinho').html(`<h2>${$texto.data('titulo')}</h2> <p>${$texto.data('conteudo')}</p>`);
})

$('.marcacao').mouseout(() => {
    $('#balaozinho').html('');
})

$('.marcacao').mousemove((e) => {
    $('#balaozinho').css('left', `${e.pageX}px`);
    $('#balaozinho').css('top', `${e.pageY}px`);
})

$('.marcacao').click(e => {
    let $a = $(e.currentTarget);
    $a.toggleClass('selecionada');
    $atual = $a.focus();
    $($atual).css('left', `${$('#marcacao-x').val()}px`);
    $($atual).css('top', `${$('#marcacao-y').val()}px`);
    $($atual).css('width', `${$('#marcacao-largura').val()}px`);
    $($atual).css('height', `${$('#marcacao-altura').val()}px`);
})

$('#marcacao-x').keyup(() => {
    $($atual).css('left', `${$('#marcacao-x').val()}px`);
})
$('#marcacao-y').keyup(() => {
    $($atual).css('top', `${$('#marcacao-y').val()}px`);
})
$('#marcacao-largura').keyup(() => {
    $($atual).css('width', `${$('#marcacao-largura').val()}px`);
})
$('#marcacao-altura').keyup(() => {
    $($atual).css('height', `${$('#marcacao-altura').val()}px`);
})



