import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc : AuthService) { }
  public  email:string;
  public  password:string;
  ngOnInit(): void {
  }
  async onRegister(){
    try {
      const user = await this.authSvc.register(this.email,this.password);
      if(user){
        //Checkemail Verification
         console.log('User->',user);
      }
    } catch (error) {
      console.log('Error',error);
    }
  }
}


