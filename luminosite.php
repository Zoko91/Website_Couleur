<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Couleurs - Expérimentation</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="icon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<header class="container-fluid">
    <nav class="navbar navbar-inverse" style="margin-top: 15px;justify-content: center;">
        <div id="block" class="container-fluid">
            <ul id="list" class="nav">
                <li><a id="len1" class="hoverable" href="index.php">Accueil</a></li>
                <li><a id="len2" class="hoverable" href="teinte.php">Teinte</a></li>
                <li><a id="len3" class="hoverable" href="saturation.php">Saturation</a></li>
                <li><a id="len4" class="hoverable" href="#">Luminosité</a></li>
            </ul>
        </div>
    </nav>
</header>
<body>

<div id="what-the-hell-is-this">
    <div class="page-title" style="margin-top:10vh;">
        <h2>Luminosité</h2>
        <p class="lead">
            5 lettres écrites en vert sont placées sur le carré de couleur. Passez au carré suivant jusqu'à ce que vous puissez les lire ! <br/>
            Dans ce cas la, veuillez vous arretez, un examinateur passera à l'expérimentation suivante ! Merci !
        </p>
    </div>
</div>

<div class="container" style="margin-top:5vh">
    <div class="row justify-content-center">
        <div id="boxing" class="col-4">
            a b c d e f g
        </div>

    </div>
    <div id="goNext" class="row" style="margin-top:5vh">
        <div class="col-2">

        </div>
        <div class="col-3">
            <button type="button" class="fill" id="precedLumi">Précédent</button>
        </div>
        <div class="col-2" class="textToFIll" id="resultLumi">
            Résultat :
        </div>
        <div class="col-3">
            <button type="button" class="slide" id="suivantLumi">
                <div>Suivant</div>
                <i class="icon-arrow-right"></i>
            </button>
        </div>
        <div class="col-2">

        </div>





    </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</body>
</html>