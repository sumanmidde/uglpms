import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DetailsSidebar from './Detailsidebar';
import TicketSummary from './Ticketsummary';
// import Check from './Check';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Sidebar />
        <TicketSummary />
        <DetailsSidebar />
        {/* <Router>
          <Routes>
            <Route path='/leaderboard' element={<Check />} />
          </Routes>
        </Router> */}

      </header>
    </div>
  );
}

export default App;
