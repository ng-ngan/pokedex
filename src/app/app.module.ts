import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexService} from './pokedex.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pokemons/filter';
import {MatDialogModule} from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component'; 


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent,
    FilterPipe,
    PokemonDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDialogComponent]
})
export class AppModule { }
