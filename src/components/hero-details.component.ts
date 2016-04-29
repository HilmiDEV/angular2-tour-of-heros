// We begin by importing the Component and Input decorators from Angular

import {Component, Input} from 'angular2/core';
import {Hero} from '../shared/hero';

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
    @Input()
    hero: Hero;
    constructor(private _heroService: HeroService) { }




}