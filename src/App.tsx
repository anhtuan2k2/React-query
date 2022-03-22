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
import Test from './components/Test';
import RQSuperHeroes from './components/RQSuperHeroes';
import RQSuperheroDetails from './components/RQSuperheroDetails';
import ParalleQueryPage from './components/ParalleQueryPage';
import DynamicQueriesPage from './components/DynamicQueriesPage';
import DependentQueryPage from './components/DependentQueryPage';

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
              <li>
                <Link to="/rq-paralle-query">Paralle Query Page</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-paralle-query">Dynamic-Paralle Query Page</Link>
              </li>
              <li>
                <Link to="/rq-dependent-paralle-query">dependent-paralle Query Page</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/rq-dependent-paralle-query" element={<DependentQueryPage email="something@.com" />} />
            <Route path="/rq-paralle-query" element={<ParalleQueryPage />} />
            <Route path="rq-dynamic-paralle-query" element={<DynamicQueriesPage heroIds={[1, 3]} />} />
            <Route path="/re-superHeroes/:heroId" element={<RQSuperheroDetails />} />
            <Route path="/re-superHeroes" element={<RQSuperHeroes />} />
            <Route path="/superHeroes" element={<Test />} />
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

// you can change something that be default for react-query like that : 
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnmount: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: 5*60*1000,
//     },
//   },
// });