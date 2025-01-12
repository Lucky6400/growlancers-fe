
/*import FilterSection from "./components/FindJob/FilterSection/FilterSection"
import Header from "./components/FindJob/Header/Header"
import JobsSection from "./components/FindJob/JobsSection/JobsSection"
import Sidebar from "./components/FindJob/Sidebar/Sidebar"
import MessagingPage from "./components/ui/MessagingPage";

function App() {

  return (
    <main className="font-serif">
      <nav className="sticky top-0 z-[50]">
        <Header />
        <FilterSection />
      </nav>
      <div className="flex items-start">
        <Sidebar />
        <JobsSection/>
      </div>
    </main>
    //return <MessagingPage />;
 )
}
export default App; */

/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/FindJob/Header/Header";
import FilterSection from "./components/FindJob/FilterSection/FilterSection";
import JobsSection from "./components/FindJob/JobsSection/JobsSection";
import Sidebar from "./components/FindJob/Sidebar/Sidebar";
import MessagingPage from "./components/ui/MessagingPage"; // Import the MessagingPage

function App() {
  return (
    <Router>
      <main className="font-serif">
        <nav className="sticky top-0 z-[50]">
          <Header />
          <FilterSection />
        </nav>
        <div className="flex items-start">
          <Sidebar />
          <Routes>
            <Route path="/" element={<JobsSection />} /> 
            <Route path="/messages" element={<MessagingPage />} />
         </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;  */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/FindJob/Header/Header';
import FilterSection from './components/FindJob/FilterSection/FilterSection';
import JobsSection from './components/FindJob/JobsSection/JobsSection'; // "Find A Job" page
import Sidebar from './components/FindJob/Sidebar/Sidebar';
import MessagingPage from './components/ui/MessagingPage'; // "Messages" page
import FAQPage from './components/FaqPages/FAQPage';  // "FAQ" page

function App() {
  return (
    <Router>
      <main className="font-serif">
        <nav className="sticky top-0 z-[50]">
          <Header />
        </nav>
        <Content />
      </main>
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Sidebar and FilterSection based on the current route */}
      {(location.pathname === '/' || location.pathname === '/job') && (
        <div className="flex items-start">
          <Sidebar />
          <div className="flex-grow">
            <FilterSection />
            <Routes>
              <Route path="/" element={<JobsSection />} />
              <Route path="/job" element={<JobsSection />} />  {/* "Find A Job" page */}
            </Routes>
          </div>
        </div>
      )}

      {/* Main content for Messages and FAQ */}
      {location.pathname === '/messages' && <MessagingPage />} 
      {location.pathname === '/faq' && <FAQPage />}
    </div>
  );
}

export default App;
