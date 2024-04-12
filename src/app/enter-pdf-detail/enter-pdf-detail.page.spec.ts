import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterPdfDetailPage } from './enter-pdf-detail.page';

describe('EnterPdfDetailPage', () => {
  let component: EnterPdfDetailPage;
  let fixture: ComponentFixture<EnterPdfDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPdfDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
