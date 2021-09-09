import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/Entidades/mensaje';
import { User } from 'src/app/Entidades/user';
import { AuthService } from 'src/app/service/auth.service';
import { MensajesService } from 'src/app/service/mensajes.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  mensaje : Mensaje = new Mensaje();
  user : User = new User();
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$=this.authService.isLoggedIn;
  }
    onLogout(){
      this.authService.logout();
    }
  enviarMensaje(){
    // this.mensajeSvc.create(this.mensaje);
    } 
}
