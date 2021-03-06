import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDeleteComponent } from './alumnos-delete.component';

describe('AlumnosDeleteComponent', () => {
  let component: AlumnosDeleteComponent;
  let fixture: ComponentFixture<AlumnosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
