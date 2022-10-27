/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget = 0) {
  this.title = title;
  this.director = director;
  this.budget = budget;
  this.wasExpensive = function () {
    if (this.budget > 100_000_000) {
      return true;
    } else {
      return false;
    }
  };
}

movie1 = new Movie("asd", "rwefsed dsa", 120_000_001);
movie2 = new Movie("gd", "dfghhgfd dsa", 10_000_001);
console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
