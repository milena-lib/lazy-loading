import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesStatComponent } from './movies-stat.component';

describe('MoviesStatComponent', () => {
  let component: MoviesStatComponent;
  let fixture: ComponentFixture<MoviesStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
