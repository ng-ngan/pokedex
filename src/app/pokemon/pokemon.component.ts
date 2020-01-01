import { Component, OnInit } from '@angular/core';
import {PokedexService} from '../pokedex.service';
import { Pokemon } from 'src/models/pokemon';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[];
  searchText: string;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.getPokemonFromService();
  }

  getPokemonFromService(){
    this.pokemons = this.pokedexService.getAllPokemon();
  }

}
