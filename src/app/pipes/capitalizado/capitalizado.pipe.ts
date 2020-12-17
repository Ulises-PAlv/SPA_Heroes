import { Pipe, PipeTransform } from '@angular/core';

// Decorador Pipe
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // un pipe siempre recibe argumentos
  // por default todas es true por si no manda argumentos
  transform(value: string, todas: boolean = true): string {
    // value => Es el valor o variable antes de entrar al PIPE

    // args => Array de argumentos mandados con ':'
    // console.log(args);
    value = value.toLowerCase();

    // dividir el string en palabras
    let palabras = value.split(' ');
    console.log(palabras);

    // verificar cuando todas viene en true, se capitaliza cada palabra del string
    if( todas ) {
      palabras = palabras.map( palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1); // substr a partir de la posicion indicada trae todo el resto del array
      });
    } else {
      palabras[0] = palabras[0].charAt(0).toUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
    // join() une palabras y te pide un caracter para unirlas
  }

}
