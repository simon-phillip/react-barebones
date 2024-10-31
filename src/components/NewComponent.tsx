import React from 'react';

export interface NewComponentProps {
  title?: string;
}

const NewComponent: React.FC<NewComponentProps> = ({ title = 'Default Title' }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h1>{title}</h1>
    </div>
  );
};

export default NewComponent; 