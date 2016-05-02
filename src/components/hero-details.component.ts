// We begin by importing the Component and Input decorators from Angular

import {Component, Input} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroService} from '../shared/hero.service';

//Define the component annotation (Decorator) for configure the component

// We create metadata with the @Component decorator
@Component({
    selector : "<my-hero-detail>",
    template: `
          <div *ngIf="hero">
           <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
             <div>
                <label>name: </label>
                    <input [(ngModel)]="hero.name" placeholder="name"/>
                </div>
                </div>
                        `

})

// Define the class component for define the manipulation
// of the view and define the properties & the behaviors

//we export the class to make it available to other components.

export class HeroDetailComponent {
    /*
    * To bind the property from the <component-tag [property_target]="the value"></component-tag>
    * <my-hero-detail [hero]="selectedHero"></my-hero-detail>
     * */
    //Annotation to define the property hero like an input of other component
    @Input()
    hero: Hero;
    constructor(private _heroService: HeroService) { }




}