import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableModels } from './available-models';

describe('AvailableModels', () => {
  let component: AvailableModels;
  let fixture: ComponentFixture<AvailableModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableModels],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableModels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
