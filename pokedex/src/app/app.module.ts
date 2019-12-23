import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllPokeComponent } from './all-poke/all-poke.component';
import { NavPokeComponent } from './nav-poke/nav-poke.component';
import { FooterPokeComponent } from './footer-poke/footer-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPokeComponent,
    NavPokeComponent,
    FooterPokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
