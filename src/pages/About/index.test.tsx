import { expect, it } from 'vitest';
import { render } from '@testing-library/preact';

import About from './index';

it('renders the homepage', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
