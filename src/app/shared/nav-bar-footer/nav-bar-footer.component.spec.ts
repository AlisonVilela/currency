import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFooterComponent } from './nav-bar-footer.component';

describe('NavBarFooterComponent', () => {
  let component: NavBarFooterComponent;
  let fixture: ComponentFixture<NavBarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
