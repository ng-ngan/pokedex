import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-poke',
  templateUrl: './all-poke.component.html',
  styleUrls: ['./all-poke.component.css']
})
export class AllPokeComponent implements OnInit {
  constructor() { 
    var Pokedex = require('pokedex-promise-v2');
    var P = new Pokedex();

    P.getPokemonsList()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  }

  ngOnInit() {
  }



}
