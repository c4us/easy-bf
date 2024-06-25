import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdHeaderComponent } from './jd-header.component';

describe('JdHeaderComponent', () => {
  let component: JdHeaderComponent;
  let fixture: ComponentFixture<JdHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdHeaderComponent]
    });
    fixture = TestBed.createComponent(JdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
