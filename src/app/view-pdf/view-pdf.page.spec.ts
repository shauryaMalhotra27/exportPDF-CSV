import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPdfPage } from './view-pdf.page';

describe('ViewPdfPage', () => {
  let component: ViewPdfPage;
  let fixture: ComponentFixture<ViewPdfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
