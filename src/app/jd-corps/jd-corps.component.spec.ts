import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdCorpsComponent } from './jd-corps.component';

describe('JdCorpsComponent', () => {
  let component: JdCorpsComponent;
  let fixture: ComponentFixture<JdCorpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdCorpsComponent]
    });
    fixture = TestBed.createComponent(JdCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
