import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CategoriesComponent } from './categories/categories.component';
import { LiveComponent } from './livetv/live.component';
import { TryComponent } from './try/try.component';

const routes: Routes = [
   {path:'',redirectTo:'megamenu',pathMatch:"full"},
   {path:'megamenu',component:NavbarComponent,pathMatch:"full"},
   {path:'home/:url',component:HomeComponent,pathMatch:"full",
     children:[
      {path:'all',component:HomeComponent},
      {path:'movies',component:HomeComponent},
      {path:'tvshows',component:HomeComponent},
     ]
   },
   {path:'store/:url',component:StoreComponent,pathMatch:"full",
     children:[
      {path:'all',component:StoreComponent},
      {path:'rent',component:StoreComponent},
      {path:'channels',component:StoreComponent},
     ]
   },
   {path:'categories/:url',component:CategoriesComponent,pathMatch:"full",
     children:[
      {path:'action&adventure',component:CategoriesComponent},
      {path:'animated',component:CategoriesComponent},
      {path:'comedy',component:CategoriesComponent},
      {path:'documentary',component:CategoriesComponent},
      {path:'drama',component:CategoriesComponent},
      {path:'fantasy',component:CategoriesComponent},      
     ]
   },
   {path:'live/:url',component:LiveComponent,pathMatch:"full"},
   {path:'try/:url',component:TryComponent,pathMatch:"full"},
   {path:'**',redirectTo:'megamenu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
