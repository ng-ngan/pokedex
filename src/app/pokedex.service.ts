import { Injectable, OnInit } from '@angular/core';
import { Pokemon, Stat} from '../models/pokemon';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class PokedexService{
  pokemonList: Pokemon []=[];

  constructor(private httpclient : HttpClient) { 
    this.getPokemonFromAPI();
  }

  getPokemonFromAPI(){
    this.httpclient.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151").subscribe ( (data: any) => {
      data.results.forEach( (result: any)=> {
        // for each url --> request more info
        var poke = this.getPokemonByUrl(result.url);  
        this.pokemonList.push(poke);
      })
    }) //send request
  }

  //return an array of pokemons.
  getAllPokemon() {
    return this.pokemonList;
  }

  getPokemonById(givenId){ // take one pokemon by id
    for (let pokemon of this.pokemonList){ 
      if (pokemon.id == givenId)
        return pokemon;
    }
  }

  getPokemonByUrl(url){
    var poke = new Pokemon();
    this.httpclient.get(url).subscribe((data: any) => {
      poke.name = data.name;
      poke.id = data.id;
      poke.sprite = data.sprites.front_default;
      poke.height = data.height;
      poke.weight = data.weight;
      poke.types = [];

      var new_stats = new Stat();
      new_stats.hp = data.stats[5].base_stat;
      new_stats.attack = data.stats[4].base_stat;
      new_stats.defense = data.stats[3].base_stat;
      new_stats.sp_attack = data.stats[2].base_stat;
      new_stats.sp_defense = data.stats[1].base_stat;
      new_stats.speed = data.stats[0].base_stat;

      poke.stats = new_stats;

      data.types.forEach( (dataType: any)=> {
        poke.types.push(dataType.type.name);
      });
    });
    return poke;
  }

}




//dung service de truy xuat du lieu ve va chuyen du lieu do cho component