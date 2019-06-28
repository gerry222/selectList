import { Component } from '@angular/core';
import { Country } from './country';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent { 

  selectedCountry:Country = new Country(1, 'USA');
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil')
  ];
  onSelect(countryId) { 
    this.selectedCountry = null;
    for (var i = 0; i < this.countries.length; i++)
    {
      if (this.countries[i].id == countryId) {
        this.selectedCountry = this.countries[i];
        console.log(this.selectedCountry);
      }
    }
 }

  
  options = [
    new Country(1, 'USA' ),
    new Country(2, 'India' ),
    new Country(3, 'Australia' ),
    new Country(4, 'Brazil')
 ];
  optionSelected = this.options;
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }



// options = [
//   {id:1, name: 'gerry'}, 
//   {id:2, name: 'mark'}, 
//   ];
// optionSelected: any;
//   onOptionsSelected(event: any){
//     console.log(event); //option value will be sent as event
//   }

  
}

