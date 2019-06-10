import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MTDApp } from './app.component';

describe('MTDApp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MTDApp
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MTDApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mothertongues-UI-web'`, () => {
    const fixture = TestBed.createComponent(MTDApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mothertongues-UI-web');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MTDApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mothertongues-UI-web!');
  });
});
