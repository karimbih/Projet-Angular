import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; 
    
    
    value = value.replace(/_/g, ' ');

    
    return value
      .toLowerCase()          
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Met la première lettre de chaque mot en majuscule
  }

}
