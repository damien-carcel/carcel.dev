import { render } from '@testing-library/preact';
import { expect, it } from 'vitest';

import About from './index';

it('renders the homepage', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
