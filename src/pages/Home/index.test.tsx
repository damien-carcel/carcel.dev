import { render } from '@testing-library/preact';
import { expect, it } from 'vitest';

import Home from './index';

it('renders the homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
