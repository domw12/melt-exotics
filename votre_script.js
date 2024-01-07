$("#registration-form").submit(function (e) {
    e.preventDefault();

    // Récupérez les données du formulaire
    var formData = {
        nom: $("#nom").val(),
        prenom: $("#prenom").val(),
        email: $("#email").val(),
        motDePasse: $("#motDePasse").val()
    };

    // Envoyez les données au serveur
    $.post("votre_script_d_inscription.php", formData, function (data) {
        if (data.success) {
            // L'inscription a réussi, affichez un message de confirmation
            alert(data.message);
            // Redirigez l'utilisateur vers une page de connexion ou autre
        } else {
            // L'inscription a échoué, affichez un message d'erreur
            alert(data.message);
        }
    }, "json");
});
