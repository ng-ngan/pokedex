import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  NUM_POKEMONS = 151;

  pokemonSubject = new BehaviorSubject<any>([]);

  constructor(private httpclient : HttpClient) {
    this.getPokemons();
  }


  getPokemons(){
    var pokemons= [];
    for (let id = 1; id <= this.NUM_POKEMONS; id ++ ){
      this.getPokemonById(id).subscribe((data: any) => pokemons.push(data));
    }

    this.pokemonSubject.next(pokemons);
  }

  getPokemonById(id){
    return this.httpclient.get("https://pokeapi.co/api/v2/pokemon/"+ id);
  }

}
