import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Mensaje} from '../Entidades/mensaje'
@Injectable({
  providedIn: 'root'
})
export class MensajesService {
 private dbpath = '/mensajes';
 mensajesRef:AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.mensajesRef=db.collection(this.dbpath);

   }

   getAll():AngularFirestoreCollection<Mensaje>{
     return this.mensajesRef;
   }
   create(mensaje:Mensaje):any{
     console.log(mensaje);
     return this.mensajesRef.add({...mensaje});
   }
}
