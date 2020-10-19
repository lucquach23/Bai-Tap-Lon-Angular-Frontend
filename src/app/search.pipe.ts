import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
      //let tmp=
        return JSON.stringify(item).toLowerCase().includes(args);
        //return JSON.stringify(item).lastIndexOf(args) > -1
    });
}
}
