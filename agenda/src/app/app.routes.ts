import { Routes } from '@angular/router';
import { Login } from './pages/login/login/login';
import { Cadastro } from './pages/login/cadastro/cadastro';
import { Home } from './pages/login/home/home/home';
import { Agenda } from './pages/login/agenda/agenda';
import { Clientes } from './pages/login/clientes/clientes';
import { ServicosPage } from './pages/login/servicos-page/servicos-page';
import { ConfiguracoesPage } from './pages/login/configuracoes-page/configuracoes-page';


export const routes: Routes = [
    {path:  '', component: Login},
    {path:  'cadastro', component: Cadastro},
    {path:  'home', component: Home},
    {path:  'agenda', component: Agenda},
    {path:  'cliente', component: Clientes},
    {path:  'servicos', component: ServicosPage},
    {path:  'configuracoes', component: ConfiguracoesPage
        
    }

];
