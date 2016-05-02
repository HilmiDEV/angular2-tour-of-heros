import {Component, OnInit} from 'angular2/core';
import {Hero} from '../shared/hero';
import {HeroService} from '../shared/hero.service';
//Import the router reference
import { Router } from 'angular2/router';

@Component({
    selector : "<my-dashboard>",
    //The Url from the root directory of the project
    templateUrl: 'src/components/dashboard.component.html',
    styleUrls : ['src/components/dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes : Hero[]=[];

    constructor(private _heroService : HeroService, private _router : Router){}

    ngOnInit (){
        //We use the arrow function syntaxe
        this._heroService.getHeroes().then(data => this.heroes=data.slice(1,5));
    }

    //The method go to detail
    gotoDetail(hero: Hero) {
        // Set a route link parameters array, with the name of the destination route and a route parameter object.
        let link = ['HeroDetail', { id: hero.id }];
        // Pass the array to the router's navigate method.
        this._router.navigate(link);
    }



}