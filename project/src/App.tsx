import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { DomainList } from './components/DomainList';
import { DomainDetail } from './components/DomainDetail';
import { ResumeAnalyzer } from './components/ResumeAnalyzer';
import { Layout } from './components/Layout';
import { domains } from './data/domains';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="domains" element={<DomainList domains={domains} />} />
          <Route path="domains/:domainId" element={<DomainDetail domains={domains} />} />
          <Route path="analyze" element={<ResumeAnalyzer domains={domains} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;