import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedishComponent } from './thedish.component';

describe('ThedishComponent', () => {
  let component: ThedishComponent;
  let fixture: ComponentFixture<ThedishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThedishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThedishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
