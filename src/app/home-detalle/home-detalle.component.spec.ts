import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetalleComponent } from './home-detalle.component';

describe('HomeDetalleComponent', () => {
  let component: HomeDetalleComponent;
  let fixture: ComponentFixture<HomeDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
