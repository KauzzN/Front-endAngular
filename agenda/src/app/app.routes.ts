import { Routes } from '@angular/router';
import { Login } from './pages/login/login/login';
import { Cadastro } from './pages/login/cadastro/cadastro';
import { Home } from './pages/login/home/home/home';


export const routes: Routes = [
    {path:  '', component: Login},
    {path:  'cadastro', component: Cadastro},
    {path:  'home', component: Home}
];
