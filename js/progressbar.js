function moveToPowerOf() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var interval = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            // Quando a barra de progresso estiver completa, redirecione para outra página.
            window.location.href = '../tela_desligada.html';
            
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function moveToPowerOn() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var interval = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            // Quando a barra de progresso estiver completa, redirecione para outra página.
            window.location.href = '../../index.html';
            
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

// Inicie a função move() quando a página for carregada.
//window.onload = move;