import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: any = '';
  userPassword: string = '';
  userEmail: string = '';
  
  isLogin: boolean = true;

  openLogin(event: any) {
    if(this.isLogin == false){
      event.preventDefault();
      this.isLogin = true;
    }else{
      event.preventDefault();
      this.isLogin = false;
    }
  }

  onSubmit(event: any) {
    
    if(this.isLogin == false){
      console.log(this.userEmail);
      console.log(this.userName);
      console.log(this.userPassword);
    }else{
      console.log(this.userName);
      console.log(this.userPassword);
    }
  }

  
   
}
