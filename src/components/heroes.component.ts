import {Component} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroDetailComponent} from './hero-details.component';
import {HeroService} from '../shared/hero.service';
import {OnInit} from 'angular2/core';

@Component({
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    selector: 'my-heroes',
    template: `<h2>My Heroes</h2>
                <ul class="heroes">
                <li *ngFor="#hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>

                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>
               `,
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
    constructor (private _heroService: HeroService) {
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


}


