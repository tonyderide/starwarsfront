import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoulagesComponent } from './moulages.component';

describe('MoulagesComponent', () => {
  let component: MoulagesComponent;
  let fixture: ComponentFixture<MoulagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoulagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoulagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
