import Header from "@/components/FindJob/Header/Header"
import JobsSection from "@/components/FindJob/JobsSection/JobsSection"

const Applies = () => {
  return (
    <main className="font-serif">
        <nav className="sticky top-0">
            <Header/>
        </nav>

        <JobsSection applies={true} title="Applies"/>
    </main>
  )
}

export default Applies