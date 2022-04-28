import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyStoriesComponent } from './kitty-stories.component';

describe('KittyStoriesComponent', () => {
  let component: KittyStoriesComponent;
  let fixture: ComponentFixture<KittyStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittyStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KittyStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
