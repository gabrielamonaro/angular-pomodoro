import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOpenComponent } from './section-open.component';

describe('SectionOpenComponent', () => {
  let component: SectionOpenComponent;
  let fixture: ComponentFixture<SectionOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
