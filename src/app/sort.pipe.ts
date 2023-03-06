import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    
      if(args === 'name'){
        return value.sort((a:any, b:any)=>{
          if(a.name < b.name){
            return -1;
          }
          else if(a.name > b.name){
            return 1;
          }
          else{
            return 0;
          }
        });
      }
      else if(args === 'rollNo'){
        return value.sort((a:any, b:any)=>{
          if(a.rollNo < b.rollNo){
            return -1;
          }
          else if(a.rollNo > b.rollNo){
            return 1;
          }
          else{
            return 0;
          }
        });
      }
  return value;
  }

}
