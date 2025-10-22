import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { Todos } from './pages/todos/todos';
import { Quotes } from './pages/quotes/quotes';

export const routes: Routes = [
    {path:'', redirectTo:'homepage', pathMatch:'full'}, //path boş old. homepage e gitsin
    {path:'homepage',component: Homepage},
    {path:'products', component: Products},
    {path:'todos', component: Todos},
    {path:'quotes', component: Quotes}
];


//bu sayfa sayfaları yönetecek. hangi url geldiğinde neresi çalışacak vs.