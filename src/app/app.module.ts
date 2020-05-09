import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';

import {MatInputModule} from '@angular/material/input';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    EntrarComponent,
    CadastrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
