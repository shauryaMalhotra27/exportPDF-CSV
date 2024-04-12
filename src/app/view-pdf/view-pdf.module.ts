import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPdfPageRoutingModule } from './view-pdf-routing.module';

import { ViewPdfPage } from './view-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPdfPageRoutingModule
  ],
  declarations: [ViewPdfPage]
})
export class ViewPdfPageModule {}
