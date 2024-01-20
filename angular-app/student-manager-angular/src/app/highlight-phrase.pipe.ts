import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPhrase',
  standalone: true
})
export class HighlightPhrasePipe implements PipeTransform {

  transform(value: string, searchedPhrase :string) {
    if (!searchedPhrase) return value;

    const regex = new RegExp(searchedPhrase,"ig");
    return value.replace(regex, (match)=> `<span class="highlight">${match}</span>`);
  }

}
