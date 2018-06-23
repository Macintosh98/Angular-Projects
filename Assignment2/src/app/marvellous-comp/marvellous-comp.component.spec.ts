import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousCompComponent } from './marvellous-comp.component';

describe('MarvellousCompComponent', () => {
  let component: MarvellousCompComponent;
  let fixture: ComponentFixture<MarvellousCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvellousCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
