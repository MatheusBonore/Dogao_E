import { Routes } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

import { RecuperarComponent } from './autenticacao/recuperar/recuperar.component';
import { EmailComponent } from './autenticacao/recuperar/email/email.component';
import { SenhaComponent } from './autenticacao/recuperar/senha/senha.component';

import { InicioComponent } from './inicio/inicio.component';
import { PesquisaComponent } from './inicio/pesquisa/pesquisa.component';
import { CategoriaComponent } from './inicio/categoria/categoria.component';

export const appRoutes: Routes = [
	{
		path: 'autenticacao',
		component: AutenticacaoComponent,
		children: [
			{
				path: 'entrar',
				component: EntrarComponent
			}, {
				path: 'cadastrar',
				component: CadastrarComponent
			}, {
				path: 'recuperar',
				component: RecuperarComponent,
				children: [
					{
						path: 'email',
						component: EmailComponent
					}, {
						path: 'senha',
						component: SenhaComponent
					}
				]
			}
		]
	}, {
		path: 'inicio',
		component: InicioComponent,
		children: [
			{
				path: 'pesquisa',
				component: PesquisaComponent
			}, {
				path: 'categoria',
				component: CategoriaComponent
			}
		]
	}
];