import { expect, it } from 'vitest';
import { render } from '@testing-library/preact';

import Cv from './index';

it('renders the homepage', () => {
  const { container } = render(<Cv />);
  expect(container).toMatchSnapshot();
});
