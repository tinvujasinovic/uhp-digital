import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any): string {
    if(!value || value.name == '')
    return '';

    let name = value.name;

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }
}
