import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFrameComponent } from './footer-frame.component';

describe('FooterFrameComponent', () => {
  let component: FooterFrameComponent;
  let fixture: ComponentFixture<FooterFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
