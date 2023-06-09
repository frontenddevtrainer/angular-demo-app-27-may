import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListingComponent } from './users-listing.component';

describe('UsersListingComponent', () => {
  let component: UsersListingComponent;
  let fixture: ComponentFixture<UsersListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListingComponent]
    });
    fixture = TestBed.createComponent(UsersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
