import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterPdfDetailPageRoutingModule } from './enter-pdf-detail-routing.module';

import { EnterPdfDetailPage } from './enter-pdf-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterPdfDetailPageRoutingModule
  ],
  declarations: [EnterPdfDetailPage]
})
export class EnterPdfDetailPageModule {}
