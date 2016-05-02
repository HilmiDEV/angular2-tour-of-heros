import {Component} from 'angular2/core';
import {HeroService} from './shared/hero.service';
import {HeroesComponent} from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component';
import {HeroDetailComponent} from './components/hero-details.component';
/*
    The Angular router is a combination of multiple services (ROUTER_PROVIDERS),
     multiple directives (ROUTER_DIRECTIVES),
      and a configuration decorator (RouteConfig).
       We'll import them all together
 */
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES],
    //We have to teach the injector how to make a HeroService by registering a HeroService provider.
    //Adding the providers array creates a new service instance
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]

})

// The configuration of the router(navigation) of the app in the Router Component
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path : "/dashboard",
        name : "Dashboard",
        component : DashboardComponent,
        useAsDefault : true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

// We call this type of component a Router Component.

export class AppComponent {
    title : string = "Tour of Heroes with Angular2 & Typescript";



}


