import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ModalModule } from 'ngx-bootstrap/modal';

import { appRoutes } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { AppService } from 'src/services/app.service';
import { AutenticacaoService } from 'src/services/autenticacao/autenticacao.service';
import { UsuarioService } from 'src/services/usuario/usuario.service';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

import { RecuperarComponent } from './autenticacao/recuperar/recuperar.component';
import { EmailComponent } from './autenticacao/recuperar/email/email.component';
import { SenhaComponent } from './autenticacao/recuperar/senha/senha.component';

import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { NavbarBottomComponent } from './inicio/navbar-bottom/navbar-bottom.component';

import { ModalCategoriaComponent } from './inicio/navbar-bottom/modal-categoria/modal-categoria.component';
import { ModalNotificacaoComponent } from './inicio/navbar-bottom/modal-notificacao/modal-notificacao.component';
import { ModalMenuComponent } from './inicio/navbar-bottom/modal-menu/modal-menu.component';

import { LinhaTempoComponent } from './inicio/linha-tempo/linha-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    EntrarComponent,
    CadastrarComponent,
    RecuperarComponent,
    EmailComponent,
    SenhaComponent,
    InicioComponent,
    NavbarComponent,
    NavbarBottomComponent,
    LinhaTempoComponent,
    ModalCategoriaComponent,
    ModalNotificacaoComponent,
    ModalMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ModalModule.forRoot(),
  ],
  providers: [
    AppService,
    AutenticacaoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
