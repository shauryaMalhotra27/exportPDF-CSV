import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPdfPage } from './view-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPdfPageRoutingModule {}
