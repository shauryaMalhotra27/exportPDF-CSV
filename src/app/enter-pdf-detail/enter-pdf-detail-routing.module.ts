import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterPdfDetailPage } from './enter-pdf-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EnterPdfDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterPdfDetailPageRoutingModule {}
