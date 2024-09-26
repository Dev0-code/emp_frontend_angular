import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
 
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(value);
    console.log(args)
    if(!value) return[]
    if(!args)return value
    const key:any=args.toLowerCase()
    const emp:any=value.filter((item:any)=>item.name.toLowerCase().includes(key))
    return emp
    
  }

}
