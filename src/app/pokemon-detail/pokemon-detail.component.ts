import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon:any;
 

  constructor(private activatedRoute: ActivatedRoute,
    private pokedexService : PokedexService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pokedexService.getPokemonById(id).subscribe((data: any) => this.pokemon = data);
    
  }
 

  };


