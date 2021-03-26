import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { PruebaUsuario } from 'src/app/service/prueba-usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc : AuthService,private usrSvc : PruebaUsuario ) { }
  public  email:string;
  public  password:string;
  ngOnInit(): void {
    console.log(this.usrSvc.datosUsuario);
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


