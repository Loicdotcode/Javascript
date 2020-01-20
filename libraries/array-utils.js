// Fonction de déduplication

function deduplication(sourceArray) {

    //Suppression des doublons
    var item, postFound;
    var newArray = [];

    for (let index in sourceArray) {
        item = sourceArray[index];
        postFound = sourceArray.indexOf(item);

        if (postFound == index) {
            newArray.push(item)

        }
    }

    return newArray;

}

// Fonction d'affichage d'un tableau ordinal sous forme de liste html
function getHtmlList(sourceArray) {
    var html = "<ul>"
    for (let item of sourceArray) {
        html += `<li>${item}</li>`;
    }
    html += "</ul>"

    return html;
}

/*
       * Fonction retournant le code html d'une case de tableau HTML
       * paramètres : la valeur à insérer dans la case
       *            : estEnTete est une boolean indiquant si la case est une case d'en-tête
       */
function obtenirCaseHtml(valeur, estEnTete) {
    if (estEnTete) {
        return `<th> ${valeur} </th>`
    } else {
        return `<td> ${valeur} </td> `;
    }

}

/*
* Fonction retournant le code html d'une ligne de tableau HTML
* paramètre: l'objet contenant les données de la ligne
* */
function obtenirLigneHtml(objet) {
    let html = "<tr>";
    for (clef in objet) {
        html += obtenirCaseHtml(objet[clef]);
    }
    html += "</tr>";

    return html;
}
/**
* Fonction retournant le code html de l'en-tete d'un tableau
* parametre : un objet contenant les clefs qui correspondent aux en-têtes
* 
*/
function obtenirEnTeteHtml(objet) {
    let html = "<tr>";
    for (clef in objet) {
        html += obtenirCaseHtml(clef, true);
    }
    html += "</tr>";

    return html;
}
/* 
* Fonction retournant le code html d'un tableau 
* paramètre : un tableau ordinal d'objet 
*/
function obtenirTableHtml(data) {
    let html = "<table>";

    if (data.length > 0) {
        html += obtenirEnTeteHtml(data[0]);
    }

    for (let ligne of data) {
        html += obtenirLigneHtml(ligne);
    }

    html += "</table>"

    return html;
}


/* Cryptage de cesar */

function cryptageCesar(chaine) {
    var resultat = "";
    for (pos in chaine) {
        
        code = chaine.charCodeAt(pos) + 1;
        if (code > 122){
            code = 97
        } 
        resultat += String.fromCharCode(code);
    } 
    return resultat;
}