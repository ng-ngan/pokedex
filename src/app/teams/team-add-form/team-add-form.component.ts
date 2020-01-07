import { Component, OnInit } from '@angular/core';
import { Team } from '../../Team';
import { PokedexService } from 'src/app/pokedex.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import {MatFormFieldModule} from '@angular/material/form-field'; 

@Component({
  selector: 'app-team-add-form',
  templateUrl: './team-add-form.component.html',
  styleUrls: ['./team-add-form.component.css']
})
export class TeamAddFormComponent implements OnInit {
  myteam: Team;

  teamName: string;
  pokeValues: string[]=[];
  pokemons : any[]=[];

  constructor(private pokedexService : PokedexService, private localService : LocalStorageService) { }

  ngOnInit() {
    this.pokedexService.pokemonSubject.subscribe((data: any) => this.pokemons = data);
  }

  onSubmit(){
    var teams = JSON.parse(localStorage.getItem('teams'));
    if (teams == null)
      teams = [];
    this.myteam = new Team();
    this.myteam.name = this.teamName;
    this.myteam.pokemons=[];
    
    this.pokeValues.forEach(pokeValue => {
      this.myteam.pokemons.push(JSON.parse(pokeValue));
    });

    teams.push(this.myteam)
    this.localService.setItem(teams);
  }

}


