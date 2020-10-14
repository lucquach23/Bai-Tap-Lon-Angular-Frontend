import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  // transform(value: any, args?: any): any {
  //   if (!args) {
  //     return value;
  //   }
  //   args = args.toLowerCase();
  // return value.filter(val => {
  //   let rVal =
  //     val.id_ClassRegister.toLocaleLowerCase().includes(args) ||
  //     val.id_lecturers.toLocaleLowerCase().includes(args) ||
  //     val.name.toLocaleLowerCase().includes(args) ||
  //     val.name_subject.toLocaleLowerCase().includes(args) ||
  //     val.room.toLocaleLowerCase().includes(args) ||
  //     val.thu.toLocaleLowerCase().includes(args) ||
  //     val.time.toLocaleLowerCase().includes(args) ||     
  //     val.week.toLocaleLowerCase().includes(args);
  //   return rVal;
  // });
  // }
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
