import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat.component';

describe('DanhSachGheDaDatComponent', () => {
  let component: DanhSachGheDaDatComponent;
  let fixture: ComponentFixture<DanhSachGheDaDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachGheDaDatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachGheDaDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
