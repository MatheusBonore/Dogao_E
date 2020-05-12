import { Routes } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

import { RecuperarComponent } from './autenticacao/recuperar/recuperar.component';
import { EmailComponent } from './autenticacao/recuperar/email/email.component';
import { SenhaComponent } from './autenticacao/recuperar/senha/senha.component';

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
		path: '',
		pathMatch: 'full',
		redirectTo: 'autenticacao'
	}, {
		path: 'autenticacao',
		pathMatch: 'full',
		redirectTo: '/entrar'
	}, {
		path: 'recuperar',
		pathMatch: 'full',
		redirectTo: 'autenticacao'
	},
];