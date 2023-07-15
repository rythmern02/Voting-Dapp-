import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the login component when voting is not in progress', () => {
    const loginElement = screen.getByTestId('login-component');
    expect(loginElement).toBeInTheDocument();
  });

  it('renders the connected component when voting is in progress and user is connected', () => {
    // Simulate voting in progress and user connected state
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            votingStatus: true,
            isConnected: true,
          }),
      })
    );

    // Re-render the component with updated state
    render(<App />);

    const connectedElement = screen.getByTestId('connected-component');
    expect(connectedElement).toBeInTheDocument();
  });

  it('renders the finished component when voting is in progress and user is not connected', () => {
    // Simulate voting in progress and user not connected state
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            votingStatus: true,
            isConnected: false,
          }),
      })
    );

    // Re-render the component with updated state
    render(<App />);

    const finishedElement = screen.getByTestId('finished-component');
    expect(finishedElement).toBeInTheDocument();
  });
});
