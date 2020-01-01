import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // chen thu vien nay de lay ve id
import { Pokemon } from 'src/models/pokemon';
import {PokedexService} from '../pokedex.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  constructor(private activatedRoute: ActivatedRoute, 
    private pokedexService:PokedexService) { } 
  // inject ActivatedRoute vao class bang cach dat ten la activateRoute

  ngOnInit() {
   var x = this.getRouteId();
   this.pokemon =  this.pokedexService.getPokemonById(x);
  }
  getRouteId(){ // lay id tren url
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    return id;
  }
}
