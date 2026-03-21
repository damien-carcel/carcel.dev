import { render } from '@testing-library/react';
import Cv from '@/app/cv/page';

it('renders CV page', () => {
  const { container } = render(<Cv />);
  expect(container).toMatchSnapshot();
});
