import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularActorsComponent } from './popular-actors.component';

describe('PopularActorsComponent', () => {
  let component: PopularActorsComponent;
  let fixture: ComponentFixture<PopularActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
