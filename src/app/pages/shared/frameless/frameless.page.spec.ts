import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FramelessPage } from './frameless.page';

describe('FramelessPage', () => {
  let component: FramelessPage;
  let fixture: ComponentFixture<FramelessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FramelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
