import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
  pure: true
})
export class DateTransformPipe implements PipeTransform {

  transform(value: string): string {
    console.log('entré' , value);
    const date = value.split('-');
    const newDate = date[2] + '-' + date[1] + '-' + date[0];
    return newDate
  }

}
