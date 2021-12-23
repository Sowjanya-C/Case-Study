import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTaskStatusComponent } from './track-task-status.component';

describe('TrackTaskStatusComponent', () => {
  let component: TrackTaskStatusComponent;
  let fixture: ComponentFixture<TrackTaskStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTaskStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
