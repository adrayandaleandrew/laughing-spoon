import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
   <app-header />  
    <h1>Welcome to {{title()}}!</h1>
    <main>
      <router-outlet />
    </main>
  `,
  
  styles: [],
})
export class AppComponent {
  title = signal('app');
}
