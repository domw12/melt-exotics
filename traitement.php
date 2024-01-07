<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez les données du formulaire
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $motDePasse = $_POST["motDePasse"];

    echo "Bienvenue sur melt exotics";

    // Vous pouvez maintenant traiter ces données, par exemple, les enregistrer dans une base de données
    // Assurez-vous de mettre en place une connexion à la base de données si nécessaire
    // et d'échapper les données pour éviter les failles de sécurité
    // Exemple : $nom = mysqli_real_escape_string($connexion, $nom);
    // N'oubliez pas de hacher le mot de passe avant de le stocker dans la base de données

    // Vous pouvez également effectuer des validations sur les données soumises ici

    // Une fois le traitement terminé, vous pouvez rediriger l'utilisateur vers une page de confirmation ou d'accueil
   
}
?>
