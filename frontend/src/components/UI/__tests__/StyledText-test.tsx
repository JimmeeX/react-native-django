import * as React from 'react';
import renderer from 'react-test-renderer';

import StyledText from '../StyledText';

describe('StyledText Component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<StyledText>Snapshot test</StyledText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
