import { CategoriaanimalComponent } from './categoriaanimal/categoriaanimal.component';
import { Routes,  RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [{path : '', component : CategoriaanimalComponent} ,
                           {path : 'index' , component : CategoriaanimalComponent},
                           {path : '**' , component : CategoriaanimalComponent}
                        ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
