import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',  
  pure: false
  
})
export class KeyvaluePipe implements PipeTransform {
  /* 
    TODO Try to return keys and value with just one pipe
  */
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
   
  }

}
