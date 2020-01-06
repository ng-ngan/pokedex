import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPokemon'
})
export class FilterPipe implements PipeTransform {
    transform(data: any[], searchText:string) {
        if (searchText == null || searchText == '')
            return data;
        searchText = searchText.toLowerCase();

        return data.filter(item => 
            item.name.includes(searchText) 
        );
      }
}