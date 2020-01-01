import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent} from './pokemon/pokemon.component';
import { PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path:'pokemons', component:PokemonComponent},
  {path:'pokemon/:id',component:PokemonDetailComponent},
  {path:'', redirectTo:"/pokemons", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
