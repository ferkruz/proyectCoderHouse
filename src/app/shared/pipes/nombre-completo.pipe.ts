import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  // {{element.name | nombreCompleto:'dolar':true}}
  // {{element.name | nombreCompleto:'euro':false}}

  transform(value: string,  args: string):  string {
    let fullName= `${value} =>${args}`
    return fullName;
  }

}
