import { Component, OnInit } from '@angular/core';
import { PokedexService} from '../pokedex.service'
import { FilterPipe } from './filter'
import {MatDialog, MatDialogConfig} from "@angular/material";
import { PokemonDialogComponent} from '../pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons =[];
  searchText: String ='';

  constructor(private pokedexService : PokedexService,
    private dialog: MatDialog) { }

  ngOnInit() {  
    this.pokedexService.pokemonSubject.subscribe((data: any) => {
      this.pokemons = data});
  }
  

  openDialog(id){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id : id};

    this.dialog.open(PokemonDialogComponent, dialogConfig);
  }

}