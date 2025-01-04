import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioPageComponent } from './portafolio-page.component';

describe('PortafolioPageComponent', () => {
  let component: PortafolioPageComponent;
  let fixture: ComponentFixture<PortafolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortafolioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
