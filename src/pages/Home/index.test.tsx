import { expect, it } from 'vitest';
import { render } from '@testing-library/preact';

import Home from './index';

it('renders the homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
