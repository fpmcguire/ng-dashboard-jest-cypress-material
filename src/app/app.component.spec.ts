import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture = new AppComponent();

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title ng-dashboard', () => {
    expect(fixture.title).toEqual('ng-dashboard');
  });
});
