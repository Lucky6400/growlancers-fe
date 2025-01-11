
import FilterSection from "./components/FindJob/FilterSection/FilterSection"
import Header from "./components/FindJob/Header/Header"
import JobsSection from "./components/FindJob/JobsSection/JobsSection"
import Sidebar from "./components/FindJob/Sidebar/Sidebar"

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
  )
}

export default App
