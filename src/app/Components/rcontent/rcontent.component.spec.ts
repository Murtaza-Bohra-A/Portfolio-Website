import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcontentComponent } from './rcontent.component';

describe('RcontentComponent', () => {
  let component: RcontentComponent;
  let fixture: ComponentFixture<RcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
