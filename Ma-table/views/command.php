<main>
    <section class="container">
        <div class="title">
            <h1>Commandes</h1>
        </div>
        <div class="cardContainer">
            <?php foreach ($platList as $command) :?>
                <div class="card">
                    <h3>Table n°<?= $command['plat']['id']?></h3>
                    <?php foreach ($command as $plats) :?>
                        <p class="brownDark"><?= $plats['name']?></p>
                        <p class="brownLight"><?= $plats['description']?></p>
                    <?php endforeach; ?>
                    <div class="btnCommand">
                        <?php if ($command['plat']['id'] <= 4) : ?>
                            <button>Commande prête ?</button>
                        <?php else : ?>
                            <button style="background-color: darkred">Annuler la commande</button>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>


        </div>
    </section>
</main>
