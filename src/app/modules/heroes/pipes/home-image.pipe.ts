import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeImage'
})
export class HomeImagePipe implements PipeTransform {

  transform(value: string): string {
    return (value === 'Marvel') ? 'assets/images/marvel.png' : 'assets/images/dc.png';
  }

}
