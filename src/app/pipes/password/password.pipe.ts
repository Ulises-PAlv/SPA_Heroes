import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
