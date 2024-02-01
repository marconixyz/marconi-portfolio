function isWebFormat() {
    return window.innerWidth > 768;
}

function resetLayout() {
    var allElements = document.querySelectorAll('body > *');
    allElements.forEach(function (element) {
        element.classList.remove('hidden');
    });

    var ocultNavElement = document.querySelector('.ocult-nav');
    ocultNavElement.style.display = 'none';
}

window.addEventListener('resize', function () {
    if (isWebFormat()) {
        resetLayout();
    }
});

function navclick() {
    var elementsToHide = document.querySelectorAll('body > :not(.ocult-nav)');
    elementsToHide.forEach(function (element) {
        element.classList.add('hidden');
    });

    var ocultNavElement = document.querySelector('.ocult-nav');
    ocultNavElement.style.display = 'block';
}

function exitclick() {
    var allElements = document.querySelectorAll('body > *');
    allElements.forEach(function (element) {
        element.classList.remove('hidden');
    });

    var ocultNavElement = document.querySelector('.ocult-nav');
    ocultNavElement.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    var voltarBtn = document.getElementById("voltarBtn");
    voltarBtn.style.color = "#203dfe";
    voltarBtn.style.display = "none";

    voltarBtn.addEventListener("click", voltarParaContato);
    voltarBtn.addEventListener("mouseover", function () {
        voltarBtn.style.color = "#fe04d6";
    });
    voltarBtn.addEventListener("mouseout", function () {
        voltarBtn.style.color = "#203dfe";
    });
});

function voltarParaContato() {
    window.location.href = 'contato.html';
}

function enviarFormulario(event) {
    event.preventDefault();

    var formularioContato = document.getElementById("formulario-contato");
    var mensagemEnviando = document.getElementById("mensagem-enviando");
    var contatoLogosContainer = document.querySelector(".contact-logos-container");

    var inputs = formularioContato.querySelectorAll('input[type="text"], input[type="email"], textarea');
    var formularioPreenchido = Array.from(inputs).every(input => input.value.trim() !== '');

    if (!formularioPreenchido) {
        destacarCamposNaoPreenchidos(formularioContato);
        return;
    }

    function fadeOutAndDisplayNone(element) {
        element.style.transition = "opacity 0.5s ease-out";
        element.style.opacity = 0;
        setTimeout(function () {
            element.style.display = "none";
        }, 500);
    }

    fadeOutAndDisplayNone(formularioContato);
    fadeOutAndDisplayNone(contatoLogosContainer);

    setTimeout(function () {
        mostrarMensagemEnviado(mensagemEnviando);

        setTimeout(function () {
            contatoLogosContainer.style.display = "block";
            contatoLogosContainer.style.opacity = 1;
        }, 50);

        var formData = new FormData(formularioContato);

        setTimeout(function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", formularioContato.action, true);

            xhr.onload = function () {
                mensagemEnviando.style.display = "none";

                if (xhr.status == 200) {
                    mostrarMensagemSucesso();
                } else {
                    mostrarMensagemErro();
                }
            };

            xhr.send(formData);
        }, 3000);
    }, 500);
}

function mostrarMensagemSucesso() {
    var mensagemSucesso = document.getElementById("mensagem-sucesso");
    mostrarMensagem(mensagemSucesso, "#fe04d6");
}

function mostrarMensagemEnviado(mensagemEnviando) {
    mostrarMensagem(mensagemEnviando, "#203dfe");
}

function mostrarMensagemErro() {
    var mensagemErro = document.getElementById("mensagem-erro");
    mostrarMensagem(mensagemErro, "#203dfe");

    var voltarBtn = document.getElementById("voltarBtn");
    mostrarMensagem(voltarBtn, "#203dfe", "10px");
}

function mostrarMensagem(element, color, paddingTop = "0") {
    element.style.display = "block";
    element.style.color = color;
    element.style.fontSize = "16px";
    element.style.opacity = "0";
    element.style.transition = "opacity 0.5s ease";
    element.style.paddingTop = paddingTop;

    setTimeout(function () {
        element.style.opacity = "1";
    }, 20);
}

function initBackToTop() {
    $(document).ready(function () {
        $('.back-link').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 800);
        });
    });
}
initBackToTop();

function destacarCamposNaoPreenchidos(formularioContato) {
    var inputs = formularioContato.querySelectorAll('input[type="text"], input[type="email"], textarea');

    inputs.forEach(function (input) {
        var label = input.previousElementSibling;

        input.addEventListener('focus', function () {
            resetarEstilos(input, label);
        });

        if (input.value.trim() === '' && input.id !== 'campo-3') {
            aplicarEstilosErro(input, label);
        }

        input.addEventListener('blur', function () {
            if (input.value.trim() === '' && input.id !== 'campo-3') {
                aplicarEstilosErro(input, label);
            }
        });
    });
}

function aplicarEstilosErro(input, label) {
    input.style.border = '1px solid #ff0000';
    input.style.color = '#ff6666';
    label.style.color = '#ff0000'; 
}

function resetarEstilos(input, label) {
    input.style.border = '';
    input.style.color = '';
    label.style.color = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.add('fixed-navbar');
});

defer>
    document.addEventListener('DOMContentLoaded', function () {
        var navbar = document.querySelector('.navbar');
        navbar.classList.add('fixed-navbar');
    });


