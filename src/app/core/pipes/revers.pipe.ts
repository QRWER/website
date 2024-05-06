import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
  name: 'reverse'
})
export class ReversPipe implements PipeTransform {

  transform(value: Array<any>, options: {isAddingPointTheEnd: boolean, isAddingTwoPointsInTheEnd: boolean}): any {
    console.log(options)

    if(!value) return;

    if(options.isAddingPointTheEnd)
      value = value.map(item => item + '!')
    if(options.isAddingTwoPointsInTheEnd)
      value = value.map(item => item + '??')
    return value.reverse();
  }
}
