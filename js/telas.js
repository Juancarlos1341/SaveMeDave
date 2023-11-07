// Abrir a Janela Modal
function abrirJanelaModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Fechar a Janela Modal
function fecharJanelaModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Fechar a Janela Modal clicando fora dela
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
document.getElementById('closeModal').addEventListener('click', function() {
    fecharJanelaModal();
});