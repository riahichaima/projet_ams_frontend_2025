import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProviders } from './liste-providers';

describe('ListeProviders', () => {
  let component: ListeProviders;
  let fixture: ComponentFixture<ListeProviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProviders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
