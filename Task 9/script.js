/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget > 100_000_000) {
      return true;
    } else {
      return false;
    }
  };

}

const filmas1 = new Movie("Geras filmas", "Jonas Jonaitis", 120_000_000);
const filmas2 = new Movie("Negeras filmas", "Petras Jonaitis", 20_000_000);

console.log(filmas1);
console.log(filmas1.wasExpensive());
console.log(filmas2);
console.log(filmas2.wasExpensive());
