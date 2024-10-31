import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Components from './components';

// Function to initialize components by data-component attribute
const initializeComponents = () => {
  // Find all elements with data-component attribute
  const componentElements = document.querySelectorAll('[data-component]');

  componentElements.forEach(element => {
    const componentName = element.getAttribute('data-component');
    
    // Get the component from our Components object
    const Component = Components[componentName as keyof typeof Components];
    
    if (Component) {
      // Get additional props from data attributes
      // @ts-ignore fix later
      const dataProps = Object.keys(element.dataset)
        .reduce((props, key) => {
          if (key !== 'component') {
            // Convert camelCase back to regular prop names
            const propName = key.replace(/^prop/, '').replace(/^./, c => c.toLowerCase());
            // @ts-ignore fix later
            props[propName] = element.dataset[key] || '';
          }
          return props;
        }, {} as Record<string, string>);

      const root = createRoot(element);
      console.log('dataProps', dataProps);
      root.render(<Component {...dataProps} />);
    } else {
      console.warn(`Component ${componentName} not found`);
    }
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  initializeComponents();
}

// Export components for direct usage
export * from './components';