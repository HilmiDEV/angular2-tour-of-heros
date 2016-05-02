import {Component} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroDetailComponent} from './hero-details.component';
import {HeroService} from '../shared/hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl:'src/components/heroes.component.html' ,
    styleUrls: ['src/components/heroes.component.css'],
    directives: [HeroDetailComponent]

})
/* the Class definition of our component that can be handle the view
 by adding properties (attributs of the class) & behaviors (methods of the class)
 */
/*
 Every Angular app has at least one root component,
 conventionally named AppComponent, that hosts the client user experience.

 */
// We implement the Interface OnInit for implement the method ngOnInit
// that called by Angular in the phase of construction of the component
export class HeroesComponent implements OnInit {
    title = "Tour of Heroes with Angular2 & Typescript";
    selectedHero : Hero ;
    heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }

    //Add a constructor for Inject the service HeroService
    /*
     * The constructor itself does nothing.
     * The parameter simultaneously defines a private _heroService property
     * and identifies it as a HeroService injection site.
     * */
    constructor (private _heroService: HeroService, private _router : Router) {
        //Get the data from the HeroService



    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        // Similation with slowly loding test
        // this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

    }


    //Implement the method ngOnInit
    ngOnInit(){
        this.getHeroes();
    }

    gotoDetail(){
        this._router.navigate(['HeroDetail',{id:this.selectedHero.id}]);
    }


}


