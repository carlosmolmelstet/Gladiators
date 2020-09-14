$(function () {
    /*ATIVA JOGADOR */
    $('.btn-jogador').click(function () {
        $('.jogador').addClass('ativo');
        $('.jogador').removeClass('desativo');
        $('.staff').addClass('desativo');
        $('.campeonatos').addClass('desativo');
        $('.parceiros').addClass('desativo');
    })
    /*ATIVA STAFF */
    $('.btn-staff').click(function () {
        $('.staff').addClass('ativo');
        $('.staff').removeClass('desativo');
        $('.jogador').addClass('desativo');
        $('.campeonatos').addClass('desativo');
        $('.parceiros').addClass('desativo');
    })
    /*ATIVA CAMPEONATOS */
    $('.btn-campeonatos').click(function () {
        $('.campeonatos').addClass('ativo');
        $('.campeonatos').removeClass('desativo');
        $('.jogador').addClass('desativo');
        $('.staff').addClass('desativo');
        $('.parceiros').addClass('desativo');
    })
    /*ATIVA PARCEIROS */
    $('.btn-parceiros').click(function () {
        $('.parceiros').addClass('ativo');
        $('.parceiros').removeClass('desativo');
        $('.jogador').addClass('desativo');
        $('.staff').addClass('desativo');
        $('.campeonatos').addClass('desativo');
    })
    /*ATIVA BTN-JOGADOR*/
    $('.btn-jogador').click(function () {
        $('.btn-jogador').addClass('selecionado');
        $('.btn-staff').removeClass('selecionado');
        $('.btn-campeonatos').removeClass('selecionado');
        $('.btn-parceiros').removeClass('selecionado');
    })
    /*ATIVA BTN-STAFF */
    $('.btn-staff').click(function () {
        $('.btn-staff').addClass('selecionado');
        $('.btn-jogador').removeClass('selecionado');
        $('.btn-campeonatos').removeClass('selecionado');
        $('.btn-parceiros').removeClass('selecionado');
    })
    /*ATIVA BTN-CAMPEONATO */
    $('.btn-campeonatos').click(function () {
        $('.btn-campeonatos').addClass('selecionado');
        $('.btn-jogador').removeClass('selecionado');
        $('.btn-staff').removeClass('selecionado');
        $('.btn-parceiros').removeClass('selecionado');
    })
    /*ATIVA BTN-CAMPEONATO */
    $('.btn-parceiros').click(function () {
        $('.btn-parceiros').addClass('selecionado');
        $('.btn-jogador').removeClass('selecionado');
        $('.btn-staff').removeClass('selecionado');
        $('.btn-campeonatos').removeClass('selecionado');
    })
});
/*VER MAIS */
$(function () {
    $('.vm1').click(function () {
        $('.vm').removeClass('esconder');
        $('.vmm').removeClass('esconder-mobile');
        $('.vm1').addClass('esconder');
        $('.vm2').removeClass('esconder');
    })
    $('.vm2').click(function () {
        $('.vm').addClass('esconder');
        $('.vmm').addClass('esconder-mobile');
        $('.vm2').addClass('esconder');
        $('.vm1').removeClass('esconder');
    })
});