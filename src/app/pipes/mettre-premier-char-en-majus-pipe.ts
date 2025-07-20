import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mettrePremierCharEnMajus',
  standalone: false
})
export class MettrePremierCharEnMajusPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }

}
