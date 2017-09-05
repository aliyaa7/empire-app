import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsComponent } from './modal-options.component';

describe('ModalOptionsComponent', () => {
  let component: ModalOptionsComponent;
  let fixture: ComponentFixture<ModalOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
