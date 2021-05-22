import { TestBed } from '@angular/core/testing';

import { SignInAndSignUpService } from './sign-in-and-sign-up.service';

describe('SignInAndSignUpService', () => {
  let service: SignInAndSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInAndSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
