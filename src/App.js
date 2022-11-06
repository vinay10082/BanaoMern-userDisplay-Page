import './App.css';
import AllRoutes from './AllRoutes'
// import { fetchAllUsers } from './actions/users';

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllUsers())
  // }, [dispatch])

  return (
    <div className="App">
      <Router >
        <AllRoutes />
      </Router >
    </div>
  );
}

export default App;
