import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
  
})
export class ValuePipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {

    return Object.values(value);
  }
}
