import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PokedexService} from '../pokedex.service'


@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent implements OnInit {
  pokemon:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private pokedexService : PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemonById(this.data.id).subscribe( (result : any) => { this.pokemon = result});
  }

}
