import { render } from '@testing-library/react';

import UseEval from './use-eval';

describe('UseEval', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseEval />);
    expect(baseElement).toBeTruthy();
  });
});
