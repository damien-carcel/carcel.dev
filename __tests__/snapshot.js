import { render } from '@testing-library/react';

import Home from '@/app/page';

it('renders homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
