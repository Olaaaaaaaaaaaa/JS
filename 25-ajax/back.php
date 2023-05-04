<?php

// si appel en POST
// $langue = $_POST["langue"];

// si appel en GET
$langue = $_GET["langue"];

if ($langue == "FR") {
    $bonjour = "Bonjour";
    $auRevoir = "Au Revoir";
}
if ($langue == "EN") {
    $bonjour = "Hello";
    $auRevoir = "Goodbye";
}

$reponse["bonjour"] = $bonjour;
$reponse["aurevoir"] = $auRevoir;

echo json_encode($reponse);
