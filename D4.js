/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

//Qui stiamo definendo la funzione area che riceve come parametri b e h
function area(b, h) {
  //qui stiamo decidendo cosa deve venir fuori dalla funzione
  return b * h;
}
const base = 11;
const altezza = 12;
//dopo aver definito le due costanti base e altezza, nella variabile risultato applichiamo la funzione area che andrà a moltiplicare i due valori
const risultato = area(base, altezza);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    const moltiplicapertre = (num1 + num2) * 3;
    return moltiplicapertre;
  } else {
    const somma = num1 + num2;
    return somma;
  }
}
const x = 3;
const y = 4;
const risultato2 = crazySum(x, y);
console.log("Il risultato è: ", risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero1) {
  let differenzassoluta = Math.abs(numero1 - 19);
  if (numero1 > 19) {
    const moltiplicapertre2 = differenzassoluta * 3;
    return moltiplicapertre2;
  } else {
    return differenzassoluta;
  }
}

console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}
console.log(epify("CIAO COME STAI?"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  if (numero % 3 === 0 || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
