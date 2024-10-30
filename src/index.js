import React, {Component} from 'react'
import { createRoot } from 'react-dom/client';

class App extends Component {
 render() {
   return (
     <h1>Hello World</h1>
   )
 }
}

const root = createRoot(document.getElementById('react-target'));
root.render(<App />);