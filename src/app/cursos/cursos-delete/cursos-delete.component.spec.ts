import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDeleteComponent } from './cursos-delete.component';

describe('CursosDeleteComponent', () => {
  let component: CursosDeleteComponent;
  let fixture: ComponentFixture<CursosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
