import { Hero } from ''./hero';

mport { Component, Input } from '@angular/core';

@CJomponent({
  selector: 'hero-detail',
  template: `
    <div *ngIf="selectedHero">
      <h2>{{ hero.name }} details!</h2>
      <div><label>id: </label>{{  hero.id  }}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}