import { render } from '@testing-library/react';
import About from '@/app/about/page';

it('renders about page', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
