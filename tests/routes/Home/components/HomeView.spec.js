import React from 'react';
import { HomeView } from 'routes/Home/components/HomeView';
import { render } from 'enzyme';

describe('(View) Home', () => {
  let _component;

  beforeEach(() => {
    _component = render(<HomeView />);
  });

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4');
    const welcomeString = 'Welcome to our Site!';
    expect(welcome).to.exist;
    expect(welcome.text()).to.equal(welcomeString);
  });
});
