// We begin by importing the Component and Input decorators from Angular

import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroService} from '../shared/hero.service';
//Import the RouteParams service for get the params from the url
import { RouteParams } from 'angular2/router';


//Define the component annotation (Decorator) for configure the component

// We create metadata with the @Component decorator
@Component({
    selector : "<my-hero-detail>",
    templateUrl: 'src/components/hero-details.component.html'
})

// Define the class component for define the manipulation
// of the view and define the properties & the behaviors

//we export the class to make it available to other components.

export class HeroDetailComponent implements OnInit {
    /*
    * To bind the property from the <component-tag [property_target]="the value"></component-tag>
    * <my-hero-detail [hero]="selectedHero"></my-hero-detail>
     * */
    //Annotation to define the property hero like an input of other component @Input()

    hero: Hero;
    constructor(private _heroService: HeroService, private _routeParams : RouteParams) { }

    ngOnInit() {
        /*The hero id is a number. Route parameters are always strings.
         So we convert the route parameter value to a number with the JavaScript (+) operator.
          */
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(data => this.hero = data);
    }

    /* Going back too far could take us out of the application.
    That's acceptable in a demo. We'd guard against it in a real application,
    perhaps with the routerCanDeactivate hook.
     */

    /* click the browser's back button.
        We'll add a third option,
        a goBack method that navigates backward one step in the browser's history stack
     */
    goBack() {
        window.history.back();
    }








}