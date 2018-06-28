import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "PersonNamePipe" 
})
export class PersonNamePipe implements PipeTransform
{
    transform(value: string,  eventtype: string ): string {
        return value + " - " + eventtype;
    }
    
}