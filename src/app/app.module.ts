import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    EntrarComponent,
    CadastrarComponent,
    RecuperarComponent,
    EmailComponent,
    SenhaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AppService,
    AutenticacaoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
