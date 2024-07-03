import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeader2Component } from './my-header-2.component';

describe('MyHeader2Component', () => {
  let component: MyHeader2Component;
  let fixture: ComponentFixture<MyHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHeader2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
