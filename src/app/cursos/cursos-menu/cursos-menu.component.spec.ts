import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosMenuComponent } from './cursos-menu.component';

describe('CursosMenuComponent', () => {
  let component: CursosMenuComponent;
  let fixture: ComponentFixture<CursosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
