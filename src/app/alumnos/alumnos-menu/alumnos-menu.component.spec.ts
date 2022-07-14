import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosMenuComponent } from './alumnos-menu.component';

describe('AlumnosMenuComponent', () => {
  let component: AlumnosMenuComponent;
  let fixture: ComponentFixture<AlumnosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
