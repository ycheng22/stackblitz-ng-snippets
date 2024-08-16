import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsLayoutComponent } from './d3js-layout.component';

describe('D3jsLayoutComponent', () => {
  let component: D3jsLayoutComponent;
  let fixture: ComponentFixture<D3jsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3jsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3jsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
