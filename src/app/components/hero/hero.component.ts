import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  titleHero = signal('YOU DESERVE THE BEST ');
  paraHero = signal("YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVES IT. ");
}
