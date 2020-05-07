import { Routes } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';

export const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'autenticacao'
	}, {
		path: 'autenticacao',
		pathMatch: 'full',
		redirectTo: 'autenticacao/entrar'
	}, {
		path: 'autenticacao',
		component: AutenticacaoComponent,
		children: [
			{
				path: 'entrar',
				component: EntrarComponent
			}, {
				path: 'cadastrar',
				component: CadastrarComponent
			}
		]
	}
];