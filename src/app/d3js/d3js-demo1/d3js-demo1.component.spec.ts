import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsDemo1Component } from './d3js-demo1.component';

describe('D3jsDemo1Component', () => {
  let component: D3jsDemo1Component;
  let fixture: ComponentFixture<D3jsDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3jsDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3jsDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
