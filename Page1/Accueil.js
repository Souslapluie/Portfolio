// alert("Voulez-vous autoriser le site à jouer une musique ? Vous pourrez modifier ses paramètres à tout moment.")



	document.getElementById('custom-confirm-box-button').addEventListener('click', function() {
    customBox.innerHTML = '<p>Je suis une boîte de confirmation customisée !</p>';
    customBox.innerHTML += '<button id="modal-confirm">Confirmer</button>';
    customBox.innerHTML += '<button id="modal-close">Annuler</button>';
    modalShow();
});