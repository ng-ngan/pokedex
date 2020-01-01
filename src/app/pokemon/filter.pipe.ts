import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../models/pokemon'
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(pokemons: Pokemon[], searchText:string) {
        if (searchText == null)
            return pokemons;
        searchText = searchText.toLowerCase();

        return pokemons.filter(pokemon => 
            pokemon.name.includes(searchText) 
        );
      }
}