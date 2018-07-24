import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFrameComponent } from './header-frame.component';

describe('HeaderFrameComponent', () => {
  let component: HeaderFrameComponent;
  let fixture: ComponentFixture<HeaderFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
