$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(**) *****-****'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
                nome: "Por favor insira seu nome"
            
            },
            messages: {
                email: 'Por favor, insira um e-mail válido.'
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem campos inválidos.`)
                }
            }
            
    })
})