<?php
require_once 'datas.php';
require_once 'views/partials/head_assets.php';

if (isset($_GET['page'])) {
    require_once 'views/partials/nav.php';
}

if (isset($_GET['page']) && $_GET['page'] == 'home'){
    require_once('./views/list.php');
} elseif (isset($_GET['page']) && $_GET['page'] == 'list'){
    require_once ('./views/list.php');
} elseif (isset($_GET['page']) && $_GET['page'] == 'serveur'){
    require_once ('./views/serveurs.php');
} elseif (isset($_GET['page']) && $_GET['page'] == 'command'){
    require_once ('./views/command.php');
} elseif (isset($_GET['page']) && $_GET['page'] == 'plats'){
    require_once ('./views/plats.php');
} else {
    require_once ('./views/login.php');
}
require_once 'views/partials/footer.php';
