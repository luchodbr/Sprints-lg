import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entidades/user';
import { AuthService } from 'src/app/service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public  email:string;
  public  password:string;
  constructor(private autSvc : AuthService) { }

  ngOnInit(): void {
  }

  async onLogin(){
    try {
      const user = await this.autSvc.login(this.email,this.password);
      //fijarme si verifico mail o no
      if(user){
        console.log('User->',user);
      }
      
    } catch (error) {console.log('Error->',error);
    
      
    }
  }
  async onLoginGoogle(){
    try {
      const user = await this.autSvc.loginGoogle();
      console.log("entro en onlogin");
      //fijarme si verifico mail o no
      if(user){
        console.log('User->',user);
      }
      
    } catch (error) {console.log('Error->',error);
    
      
    }
  }
}
