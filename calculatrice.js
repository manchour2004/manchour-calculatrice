let entreeCourante = '';
let entreePrecedente = '';
let operateur = null;
let resultatAffiche = false;

function mettreAJourAffichage(valeur) {
    document.getElementById('result').innerText = valeur;
}

function effacer() {
    entreeCourante = '';
    entreePrecedente = '';
    operateur = null;
    mettreAJourAffichage('0');
}

function ajouterNombre(nombre) {
    if (resultatAffiche) {
        entreeCourante = nombre.toString();
        resultatAffiche = false;
    } else {
        entreeCourante += nombre.toString();
    }
    mettreAJourAffichage(entreeCourante);
}

function ajouterOperateur(op) {
    if (entreeCourante === '' && op === '-') {
        entreeCourante = '-';
        mettreAJourAffichage(entreeCourante);
    } else if (entreeCourante !== '') {
        calculer();
        operateur = op;
        entreePrecedente = entreeCourante;
        entreeCourante = '';
        mettreAJourAffichage(entreePrecedente + ' ' + operateur);
    }
}

function ajouterPoint() {
    if (!entreeCourante.includes('.')) {
        entreeCourante += '.';
    }
    mettreAJourAffichage(entreeCourante);
}

function calculer() {
    if (operateur === null || entreeCourante === '') return;

    let resultat;
    let precedent = parseFloat(entreePrecedente);
    let courant = parseFloat(entreeCourante);

    switch (operateur) {
        case '+':
            resultat = precedent + courant;
            break;
        case '%':
            resultat = precedent % courant;
            break;
        case '-':
            resultat = precedent - courant;
            break;
        case '×':
            resultat = precedent * courant;
            break;
        case '÷':
            if (courant === 0) {
                mettreAJourAffichage('ERROR');
                return;
            }
            resultat = precedent / courant;
            break;
    }

    entreeCourante = resultat.toString();
    mettreAJourAffichage(entreeCourante);
    resultatAffiche = true;
    operateur = null;
}

function changerSigne() {
    if (entreeCourante.startsWith('-')) {
        entreeCourante = entreeCourante.substring(1);
    } else {
        entreeCourante = '-' + entreeCourante;
    }
    mettreAJourAffichage(entreeCourante);
}


function valeurAbsolue() {
    if (entreeCourante !== '') {
        entreeCourante = Math.abs(parseFloat(entreeCourante)).toString();
        mettreAJourAffichage(entreeCourante);
    }
}