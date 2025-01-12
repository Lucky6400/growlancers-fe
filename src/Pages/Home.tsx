import FilterSection from '@/components/FindJob/FilterSection/FilterSection'
import Header from '@/components/FindJob/Header/Header'
import JobsSection from '@/components/FindJob/JobsSection/JobsSection'
import Sidebar from '@/components/FindJob/Sidebar/Sidebar'


const Home = () => {
    return (
        <main className="font-serif">
            <nav className="sticky top-0 z-[50]">
                <Header />
                <FilterSection />
            </nav>
            <section className="flex items-start w-full">
                <Sidebar />
                <JobsSection title='Available Jobs' />
            </section>

        </main>
    )
}

export default Home