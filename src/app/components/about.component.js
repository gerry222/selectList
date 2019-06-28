"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_1 = require("./country");
var AboutComponent = (function () {
    function AboutComponent() {
        this.selectedCountry = new country_1.Country(1, 'USA');
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil')
        ];
        this.options = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil')
        ];
        this.optionSelected = this.options;
        // options = [
        //   {id:1, name: 'gerry'}, 
        //   {id:2, name: 'mark'}, 
        //   ];
        // optionSelected: any;
        //   onOptionsSelected(event: any){
        //     console.log(event); //option value will be sent as event
        //   }
    }
    AboutComponent.prototype.onSelect = function (countryId) {
        this.selectedCountry = null;
        for (var i = 0; i < this.countries.length; i++) {
            if (this.countries[i].id == countryId) {
                this.selectedCountry = this.countries[i];
                console.log(this.selectedCountry);
            }
        }
    };
    AboutComponent.prototype.onOptionsSelected = function (event) {
        console.log(event); //option value will be sent as event
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'about',
        templateUrl: 'about.component.html',
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map