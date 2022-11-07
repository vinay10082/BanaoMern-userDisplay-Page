import './App.css';
import AllRoutes from './AllRoutes'

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {


  return (
    <div className="App">
      <Router >
        <AllRoutes />
      </Router >
    </div>
  );
}

export default App;
