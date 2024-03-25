import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Container from './components/layout/Container';
import Feed from './components/pages/Feed';
import AllCalls from './components/pages/AllCalls';
import Archives from './components/pages/Archives';

import { DataProvider } from './utils/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/all-calls" element={<AllCalls />} />
          <Route path="/archives" element={<Archives />} />

        </Route>
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
