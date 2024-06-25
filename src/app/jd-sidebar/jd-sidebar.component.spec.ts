import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdSidebarComponent } from './jd-sidebar.component';

describe('JdSidebarComponent', () => {
  let component: JdSidebarComponent;
  let fixture: ComponentFixture<JdSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdSidebarComponent]
    });
    fixture = TestBed.createComponent(JdSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
