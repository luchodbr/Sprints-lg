import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entidades/user';
import { AuthService } from 'src/app/service/auth.service';
import { PruebaUsuario } from 'src/app/service/prueba-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public  email:string;
  public  password:string;
  public user :User=new User();
  constructor(private autSvc : AuthService, private usrSvc : PruebaUsuario, private rutas:Router ) { }

  ngOnInit(): void {
    this.user.displayName="display";
    this.user.email="emaildeprueba";
    this.user.emailVerified=true;
    this.user.uid="uid";
    this.usrSvc.datosUsuario=this.user;
  }
   autoLogin():void {
    this.email="usuario123@gmail.com";
    this.password="asd123";
  }
  async onLogin(){
    try {
      const user = await this.autSvc.login(this.email,this.password);
      //fijarme si verifico mail o no
      if(user){
        console.log('User->',user);
        window.localStorage.setItem("user",JSON.stringify(user));
        // this.rutas.navigate(['whoim']);
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
        window.localStorage.setItem("user",JSON.stringify(user));
      }
      
    } catch (error) {console.log('Error->',error);
    
      
    }
  }
}
