import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate' //html'in içinde kullanılacak isim
})
export class TruncatePipe implements PipeTransform {

  //value => pipe'ın uygulanacağı değer
  //...args => birden fazla eklenebilir
  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}