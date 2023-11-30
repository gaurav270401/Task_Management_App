import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders App component with initial route', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Replace this with appropriate assertions based on your NavBar component
    expect(screen.getByText(/Navbar Component/i)).toBeInTheDocument();

    // Replace this with assertions based on the initial route/component
    expect(screen.getByText(/CRUDforMe Component/i)).toBeInTheDocument();
  });

  test('navigates to /crudtasks when clicking on a link', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Replace this with appropriate assertions based on your NavBar component
    expect(screen.getByText(/Navbar Component/i)).toBeInTheDocument();

    // Click on the link that should navigate to /crudtasks
    fireEvent.click(screen.getByText(/CRUDforMe Component/i));

    // Wait for the route change and verify the new route/component
    await waitFor(() => expect(screen.getByText(/CrudTasks Component/i)).toBeInTheDocument());
  });

  test('navigates to /addtask when clicking on a link', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Replace this with appropriate assertions based on your NavBar component
    expect(screen.getByText(/Navbar Component/i)).toBeInTheDocument();

    // Click on the link that should navigate to /addtask
    fireEvent.click(screen.getByText(/CRUDforMe Component/i));

    // Wait for the route change and verify the new route/component
    await waitFor(() => expect(screen.getByText(/AddTask Component/i)).toBeInTheDocument());
  });

  // Add more tests based on your specific routing scenarios
});
