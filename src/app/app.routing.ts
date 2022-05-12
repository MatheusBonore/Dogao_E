import { Routes } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

import { RecuperarComponent } from './autenticacao/recuperar/recuperar.component';
import { EmailComponent } from './autenticacao/recuperar/email/email.component';
import { SenhaComponent } from './autenticacao/recuperar/senha/senha.component';

import { InicioComponent } from './inicio/inicio.component';

import { SairComponent } from './sair/sair.component';
// import { AutenticacaoGuardGuard } from '../guards/autenticacao-guard.guard';

export const appRoutes: Routes = [
	{ //Verificar se existe o usuario autenticado.
		path: '',
		pathMatch: 'full',
		redirectTo: '/autenticacao/entrar',
	}, { //Se na rota estiver somente autenticacao dever ser feito um redirecionamento para algum children
		path: 'autenticacao',
		pathMatch: 'full',
		redirectTo: 'autenticacao/entrar',
	}, {
		path: 'autenticacao',
		component: AutenticacaoComponent,
		// canActivate: [AutenticacaoGuardGuard],
		children: [
			{
				path: 'entrar',
				component: EntrarComponent,
			}, {
				path: 'cadastrar',
				component: CadastrarComponent,
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
		],
	}, {
		path: 'inicio',
		component: InicioComponent,
		children: [],
	}, {
		path: 'sair',
		component: SairComponent,
	},
];