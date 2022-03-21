import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import HomePage from './components/HomePage';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';

function App() {
  const queryClient = new QueryClient(); 
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="some">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/re-superHeroes">re-superHeroes</Link>
              </li>
              <li>
                <Link to="/superHeroes">superHeroes</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/re-superHeroes" element={<RQSuperHeroes />} />
            <Route path="/superHeroes" element={<SuperHeroes />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/superHeroes">
            <SuperHeroes />
          </Route>
          <Route path="/">
            <HomePage />
          </Route> */}
          </Routes>
    </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;