import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-pdf',
    loadChildren: () => import('./view-pdf/view-pdf.module').then( m => m.ViewPdfPageModule)
  },
  {
    path: 'enter-pdf-detail',
    loadChildren: () => import('./enter-pdf-detail/enter-pdf-detail.module').then( m => m.EnterPdfDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
