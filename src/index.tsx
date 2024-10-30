import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import PromoBanner from './components/promobanner';

class App extends Component<{}, {}> {
  render() {
    return (
      <PromoBanner />
    );
  }
}

const container = document.getElementById('react-target');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);