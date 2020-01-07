import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  {path:"", component: PokemonsComponent},
  {path:"pokemon/:id" , component:PokemonDetailComponent},
  {path:"teams" , component:TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
