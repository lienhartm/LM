'use strict'

window.onload = function() {
    document.body.innerHTML = logo(10)
};

function logo(m) {
    return `
        <a href="javascript:myMove()" id="animate" width="${45 * m}" height="${40 * m}">
            <div class="logo" id="logo" width="${45 * m}" height="${40 * m}">
                <svg xmlns="http://www.w3.org/2000/svg" width="${45 * m}" height="${40 * m}" viewBox="0 0 ${45 * m} ${40 * m}" fill="none">
                        <!-- Fond -->
                        <rect width="${45 * m}" height="${40 * m}" fill="#f2f2f2" stroke="#484848" stroke-width="10" />
                        <!-- Lettre L -->
                        <rect x="${5 * m}"  y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#696969" />
                        <rect x="${5 * m}"  y="${30 * m}" width="${20 * m}" height="${5 * m}"  fill="#696969" />
                        <!-- Lettre M -->
                        <rect x="${15 * m}" y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#989898" />
                        <rect x="${20 * m}" y="${10 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${25 * m}" y="${15 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${30 * m}" y="${10 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${35 * m}" y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#989898" />
                        <!-- Ponctuation . -->
                        <rect x="${15* m}"  y="${30 * m}" width="${5 * m}" height="${5 * m}" fill="#c8c8c8" />
                </svg>
            </div>
        </a>
    `;
}

// Affiche Site en Travaux
function website() {
    return `
        <div class="container bordereau">
            <div class="icon">&#128679;</div> <!-- Icône de construction -->
            <h1>Page en construction</h1>
            <p>Nous travaillons dur pour rendre cette page disponible bientôt.</p>
            <div class="message">Merci de votre patience !</div>
        </div>
    `;
}

// Affiche header
function header() {
    return `
        <header>
            <hr>
            <nav>Présentation</nav>
            <hr>
            <nav>Recherche</nav>
            <hr>
            <nav>Contact</nav>
            <hr>
        </header>
    `;
}

function chart(x) {
    var chart = '';
    var main = document.getElementById('content');
    switch(x) {
        case 0:
            chart = `
                <h2>Mentions légales</h2>
                <ul>
                    <li>Editeur du site</li>
                    <p>Nom : <b>Auto-entrepreneur</b><br>
                    Pays d'activité : <b>France</b><br>
                    Site web : <a href="https://lienhart-michael.dynamic-dns.net">https://lienhart-michael.dynamic-dns.net</a><br>
                    Adresse e-mail de contact : via le <a href="#">formulaire de contact</a></p>
                    <li>Hébergement du site</li>
                    <p>Hébergement : Auto-hébergé par LIENHART MICHAEL<br>
                    Localisation du server : France</p>
                    <li>Responsabilité</li>
                    <p>L'éditeur du site met tout en oeuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, il ne saurait être tenu responsable d'erreurs ou d'ommisions, ni des résultats pouvant être obtenus par l'usage de ces informations.</p>
                    <li>Propriété intellectuelle</li>
                    <p>Sauf mention contraire, tous les contenus (textes, images codes, projets, vidéos) présents sur le site sont la propriété exclusive de LIENHART MICHAEL. Toute reproduction, représentation ou diffusion, totale oupartielle, sans autorisation préalable est interdite.</p>
                </ul>
            `;
            break;
        case 1:
            chart = `
                <h2>Politique de confidentialité (RGPD)</h2>
                <ol>
                    <li>Collecte des données personnelles</li>
                    <p>Les informations collectées via le formulaire de contact (nom, e-mail, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs. Aucune donnée personnelle n'est transmise à des tiers sans consentement explicite.</p>
                    <li>Responsable du traitement</li>
                    <p>Responsable : <b>LIENHART MICHAEL</b>, auto-entrepreneur en France</p>
                    <li>Conservation des données</li>
                    <p>Les données envoyées par formulaire sont conservées le temps nécessaire pour traiter la demande, puis supprimées.</p>
                    <li>Cookies et statistiques</li>
                    <p>Le site peut utiliser des cookies techniques ou analytiques afin d'améliorer la navigation et les performances. L'utilisateur peut configurer son navigateur pour refuser les cookies.</p>
                    <li>Droit d'accès, de rectification et de suppression</li>
                    <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                        Pour exercer ce droit : contactez-moi via le <a href="#">formulaire de contact</a>
                    </p>
                    <li>Sécurité</li>
                    <p>Le site met en oeuvre des mesures techniques pour protéger les données personnelles contre l'accès non autorisé.</p>
                </ol>
            `;
            break;
        case 2:
            chart = `
                <h2>Conditions Générales d'Utilisation (CGU)</h2>
                <ol>
                    <li>Objet</li>
                    <p>Les présentes CGU régissent l'accès et l'utilisation du site <a href="#">https://lienhart-michael.dynamic-dns.net</a>.</p>
                    <li>Acceptation</li>
                    <p>Tout utilisateur accédant au site accepte sans réserve les présentes conditions d'uilisation.</p>
                    <li>Accès au site</li>
                    <p>L'accès est libre et gratuit. Le site peut être temporairement suspendu pour maintenance ou mise à jour.</p>
                    <li>Contenu</li>
                    <p>Le contenu du site est fourni à titre informatif et peut être modifié à tout moment sans préavis.</p>
                    <li>Liens externes</li>
                    <p>Des liens vers d'autres sites peuvent être proposés. LIENHART MICHAEL n'est pas responsable du contenu de ces sites tiers.</p>
                    <li>Propriété intellectuelle</li>
                    <p>L'ensemble du contenu du site (textes, images, code, logos, etc.) est protégé par le droit d'auteur. Toutes reproduction non autorisée est interdite.</p>
                    <li>Responsabilité de l'utilisateur</li>
                    <p>L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site ni tenter d'accéder à des zones non autorisées.</p>
                    <li>Droit applicable</li>
                    <p>Les présentes CGU sont soumises au droit français.</p>
                </ol>
            `;
            break;
        case 3:
            chart = `
                <h2>Charte de partenariat / collaboration</h2>
                <ol>
                    <li>Objectif de la charte</li>
                    <p>Cette charte définit les principes de collaboration entre LIENHART MICHAËL et toutes personne ou organisation ouhaitant coopérer sur des projets numériques (sites web, robotique, IA, etc.).</p>
                    <br>
                    <li>Engagements de LIENHART MICHAEL</li>
                    <p>
                        <span></span>Fournir un travail rigoureux, transparent et conforme aux objectifs du projet.<br>
                        <span></span>Respecter la confidentialité des informations partégées.<br>
                        <span></span>Favoriser l'esprit de collaboration, la transmission de connaissances et l'innovation.
                    </p>
                    <br>
                    <li>Engagements du partenaire</li>
                    <p>
                        <span></span>Fournir des informations claires et exactes sur le projet.<br>
                        <span></span>Respecter les délais et la communication convenue.<br>
                        <span></span>Reconnaître la contribution de LIENHART MICHAEL dans toutes publication ou présentation liée au projet.
                    </p>
                    <br>
                    <li>Confidentialité et propriété</li>
                    <p>Les codes, prototypes, ou documents produits restent la propriété de leur auteur, sauf accord écrit contraire.<br>
                    Toute collaboration repose sur le respect mutuel des droits de chacun.</p>
                    <br>
                    <li>Ethique et transparence</li>
                    <p>Aucun projet ne sera accepté s'il implique une activité contraire à la loi, à l'éthique ou au respect de la vie privée.</p>
                </ol>
            `;
            break;
        case 4:
            chart = `
                <h2>Mentions sur le droit d'auteur</h2>
                <ol>
                    <li>Propriété intellectuelle</li>
                    <p>Tout le contenu publié sur le site (textes, images, codes, projets, idées, vidéos, schémas, etc, etc.) est protégé par le <b>Code de la Propirété Intellectuelle</b>.<br>Il appartient exclusivement à <b>LIENHART MICHAEL</b>, sauf mention explicite d'une source externe.</p>
                    <li>Licence d'utilisation</li>
                    <p>Sauf indication contraire, les contenus peuvent être partagés à des fins <b>non commerciales</b> à condition de citer clairement l'auteur et la source du site.</p>
                    <li>Interdictions</li>
                    <p>Toutes reproduction, modification, diffusion ou utilisation commerciale du contenu sans autorisation préalable est strictement interdite.</p>
                    <li>Signalement de violation</li>
                    <p>Toutes personne estimant qu'un contenu du site viole ses droits d'auteur peut en faire la demande de retrait via le <a href="#">formulaire de contact</a>.</p>
                </ol>
            `;
            break;
    }
    main.innerHTML = chart;
}

// Affiche footer
function footer() {
    return `
        <footer>
            <p>
                <a href="javascript:chart(0)">Mentions légales</a>
                <a href="javascript:chart(1)">Politique de confidentialité</a>
                <a href="javascript:chart(2)">Conditions d'utilisation</a>
                <a href="javascript:chart(3)">Charte partenariat</a>
                <a href="javascript:chart(4)">Droit d'auteur</a>
            </p>
            <h6>LM - 2025</h6>
        </footer>
    `;
}

// Affiche section
function main() {
    return `
        <div id="content">${website()}</div>
    `;
}

// Affiche webpage
function webpage() {
    const body = document.querySelector('body');
    body.style.background = "#F8F8F8";
    body.innerHTML = `
            ${logo(4)}
            <main>
                <!--${header()}-->
                ${main()}
            </main>
            ${footer()}
    `;
}

function myMove() {
    let a = 10; // Taille initiale du logo
    // Animation de la réduction du logo
    let re = setInterval(function() {
        if (a > 4) { // Continuer la réduction tant que a > 5
            a--; // Réduire la taille
            document.body.innerHTML = logo(a); // Mettre à jour le logo avec la nouvelle taille
        } else {
            clearInterval(re); // Arrêter l'intervalle une fois la taille atteinte
            movelogo();
        }
    }, 100); // Réduction toutes les 100ms
    
    function movelogo() {
        let pos = 0;
        const elem = document.getElementById("animate");
        // Animation du mouvement du logo
        let id = setInterval(function() {
            if (pos == -700) {
                clearInterval(id); // Arrêter l'animation
                setTimeout(webpage, 100); // Charger la page après 500ms
            } else {
                pos--; 
                elem.style.top = pos + "px"; 
                //elem.style.left = pos + "px"; 
            }
        }, 5); // Déplacement toutes les 5ms
    }
}

