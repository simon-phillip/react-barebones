import React from 'react';
import { createRoot } from 'react-dom/client';
import { PromoBanner, NewComponent } from './components';

const Preview: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Library Preview</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>PromoBanner</h2>
        <h3>Default:</h3>
        <div style={{ marginBottom: '20px' }}>
          <PromoBanner />
        </div>
        
        <h3>With Custom Promo Code:</h3>
        <div style={{ marginBottom: '20px' }}>
          <PromoBanner defaultPromoCode="CUSTOM123" />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>NewComponent</h2>
        <h3>Default:</h3>
        <div style={{ marginBottom: '20px' }}>
          <NewComponent />
        </div>
        
        <h3>With Custom Titlfdsfde:</h3>
        <div style={{ marginBottom: '20px' }}>
          <NewComponent title="Custom Title" />
        </div>
      </section>

      {/* Debug section */}
      <section style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2>Debug Info:</h2>
        <pre>
          Available Components: {JSON.stringify(Object.keys({ PromoBanner, NewComponent }), null, 2)}
        </pre>
      </section>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Preview />);
} else {
  console.error('Root element not found');
}

export default Preview; 