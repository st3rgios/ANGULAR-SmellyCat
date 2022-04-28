import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptKittensComponent } from './adopt-kittens.component';

describe('AdoptKittensComponent', () => {
  let component: AdoptKittensComponent;
  let fixture: ComponentFixture<AdoptKittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptKittensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
