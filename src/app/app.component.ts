import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,LoginComponent],
  template: `
   <app-header />  
    <h1>Welcome to {{title()}}!</h1>
    <app-login />
    <router-outlet />
  `,
  
  styles: [],
})
export class AppComponent {
  title = signal('app');
}
