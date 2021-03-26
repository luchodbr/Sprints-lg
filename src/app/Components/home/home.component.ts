import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Entidades/mensaje';
import { MensajesService } from 'src/app/service/mensajes.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensaje : Mensaje = new Mensaje();

  constructor(private mensajeSvc : MensajesService) { }

  ngOnInit(): void {
  }
    
  enviarMensaje(){
  this.mensajeSvc.create(this.mensaje);
    } 
}
