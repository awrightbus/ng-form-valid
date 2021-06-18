import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingHatService {

  constructor() { }

  sortingHat(parsedCharacters: any, interactiveCharacters: any, nonInteractiveCharacters: any): Array<any> {
    Object.keys(parsedCharacters).forEach((key: string) => {
      if (key === "harry_potter" || key === "lord_voldemort") {
        interactiveCharacters[key] = parsedCharacters[key];
      } else {
        nonInteractiveCharacters[key] = parsedCharacters[key];
      }
    });
    return [interactiveCharacters, nonInteractiveCharacters];
  }

}
