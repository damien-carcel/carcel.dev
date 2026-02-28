import { render } from '@testing-library/react';

import About from '@/app/about/page';
import Home from '@/app/page';
import Cv from '@/app/cv/page';

it('renders homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('renders about page', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

it('renders CV page', () => {
  const { container } = render(<Cv />);
  expect(container).toMatchSnapshot();
});
