import {Component, OnInit} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroService} from '../shared/hero.service';

@Component({
    selector : "<my-dashboard>",
    //The Url from the root directory of the project
    templateUrl: 'src/components/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    heroes : Hero[]=[];

    constructor(private _heroService : HeroService){}

    ngOnInit (){
        //We use the arrow function syntaxe
        this._heroService.getHeroes().then(data => this.heroes=data.slice(1,5));
    }

    //The method go to detail
    gotoDetail() {

    }


}