
import { Briefcase, DollarSign, Navigation, SearchIcon } from "lucide-react"
import Filter from "./Filter"
import { jobTypes, salaryTypes, workExperience, workLocations } from "./data"
import SalaryRange from "./SalaryRange"

const FilterSection = () => {
    return (
        <section className="bg-primary p-5 flex items-center justify-between">
            <Filter icon={<SearchIcon />} options={jobTypes} placeholder="Job Type" />

            <Filter icon={<Briefcase />} options={workExperience} placeholder="Work Experience" />

            <Filter icon={<Navigation />} options={workLocations} placeholder="Work Location" />

            <Filter icon={<DollarSign />} options={salaryTypes} placeholder="Salary Type" />
            <SalaryRange />
        </section>
    )
}

export default FilterSection