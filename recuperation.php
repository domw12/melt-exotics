<?php


/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
try {
    $pdo = new PDO("mysql:host=localhost;dbname=exotics", "root", "");
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
};

$Nom=htmlspecialchars($_POST['Nom']);
$Prenom=htmlspecialchars($_POST['Prenom']);
$Email=htmlspecialchars($_POST['Email']);
$Password=htmlspecialchars($_POST['Password']);

$t = $pdo->prepare('INSERT INTO melt(Nom,Prenom,Email,Password) VALUES(?,?,?,?)');
$t->execute(array($Nom,$Prenom,$Email,$Password));

echo "votre message a bien été envoyer"

die("ERROR: Could not connect " $e->getMessage());





















?>