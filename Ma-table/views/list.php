<main>
    <section class="container">
    <div class="title">
        <h1>Clients</h1>
    </div>
    <div class="list">
        <div class="rowList" id="rowList1">
            <div class="text-center"><p>Nom Prénom</p></div>
            <div class="text-center"><p>Adresse mail</p></div>
            <div class="text-center"><p>Nombre de visites</p></div>
            <div class="text-center"><p>Avis général</p></div>
        </div>
        <?php foreach ($list as $datasList ) :?>
            <div class="rowList">
                <div class="text-center"><p><?= $datasList['name']?></p></div>
                <div class="text-center"><p><?= $datasList['mail']?></p></div>
                <div class="text-center"><p><?= $datasList['nbVisites']?></p></div>
                <div class="text-center">
                    <?php for ($i=0; $i<$datasList['avis']; $i++) :?>
                        <i class="material-icons">star</i>
                    <?php endfor;
                    $diff = 3 - $datasList['avis'];
                    for ($i=0; $i<$diff; $i++) :?>
                        <i class="material-icons">star_border</i>
                    <?php endfor; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    </section>
</main>
