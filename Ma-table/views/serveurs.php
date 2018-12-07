<main>
<section class="container">
    <div class="title">
        <h1>Serveurs</h1>
    </div>
    <div class="FirstContainer">
        <?php foreach ($serveurList as $datas) :?>
            <div class="Serveurs">
                <div class="FirstColumn">
                    <img class="UserPic" src="assets/img/user-solid.svg" >
                    <span class="ColoredText spacedText"><?= $datas['name']?></span>
                    <span>Note Moyenne</span>
                    <div class="rating">
                        <?php for ($i=0; $i<$datas['notes']; $i++) :?>
                            <img class="RatingStars" src="assets/img/star-solid.svg">
                        <?php endfor;
                        $diff = 5 - $datas['notes'];
                        for ($i=0; $i<$diff; $i++) :?>
                            <img class="RatingStars" src="assets/img/star-regular.svg">
                        <?php endfor; ?>
                    </div>
                </div>
                <div class="FirstColumn">
                    <span>Pourboire</span>
                    <span class="ColoredText"><?=$datas['tips']?></span>
                    <span>Nombre de repas servis</span>
                    <span class="ColoredText"><?=$datas['nbrRepas']?></span>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>
</main>
