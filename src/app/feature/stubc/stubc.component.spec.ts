import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubcComponent } from './stubc.component';
import { Router } from '@angular/router';

describe('StubcComponent', () => {
  let component: StubcComponent;
  let fixture: ComponentFixture<StubcComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StubcComponent],
      providers: [{
        provide: Router,
        useClass: class {
          navigate = jasmine.createSpy('navigate');
        }
      }]
    });
    fixture = TestBed.createComponent(StubcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testa com stub o metodo router.navigate', () => {
    component.goTo();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
