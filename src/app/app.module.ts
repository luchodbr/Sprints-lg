import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { WhoimComponent } from './Components/whoim/whoim.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './Components/register/register.component';
import { AuthService } from './service/auth.service';
import { PruebaUsuario } from './service/prueba-usuario';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { MensajesService } from './service/mensajes.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WhoimComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [AuthService,PruebaUsuario,MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
