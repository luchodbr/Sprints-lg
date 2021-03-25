import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoimComponent } from './whoim.component';

describe('WhoimComponent', () => {
  let component: WhoimComponent;
  let fixture: ComponentFixture<WhoimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
