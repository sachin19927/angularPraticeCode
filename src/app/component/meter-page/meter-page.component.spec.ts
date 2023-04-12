import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterPageComponent } from './meter-page.component';

describe('MeterPageComponent', () => {
  let component: MeterPageComponent;
  let fixture: ComponentFixture<MeterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
