import JobCard from "./JobCard"
import { jobData } from "./data"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { RxCross1 } from "react-icons/rx";
import { resetFilters } from "@/redux/reducers/filterslice"

type Props = {
    applies?: boolean,
    title: string,
}

const defaultFilters = {
    jobType: "",
    workExp: "",
    location: "",
    salaryType: "",
    salaryRange: 1000,
}
const JobsSection = (props: Props) => {
    let dataToDisplay = props.applies ? jobData.filter(job => job.isApplied === true) : jobData

    const filters = useSelector((s: RootState) => s.filter)
    const dispatch = useDispatch()
    console.log(filters)
    dataToDisplay = dataToDisplay.filter(job => job.workExp.includes(filters.workExp) && job.salaryType.includes(filters.salaryType) && job.locationType.includes(filters.location) && job.minSalary >= filters.salaryRange)

    const isDefaultFilters = JSON.stringify(filters) === JSON.stringify(defaultFilters)
    return (
        <section className={"p-4 " + (props.applies ? 'w-full' : 'w-3/4')}>
            <div className="flex items-center justify-between w-full mb-5">
                <h1 className="text-3xl font-semibold">{props.title} {!props.applies && !isDefaultFilters && <Button onClick={() => dispatch(resetFilters())}>Reset <RxCross1 /></Button>}</h1>

                
            </div>

            <div className="w-full flex flex-wrap items-start gap-4">
                {dataToDisplay.map((job) => (
                    <JobCard
                        key={job.id}
                        date={job.date}
                        company={job.company}
                        position={job.position}
                        tags={job.tags}
                        location={job.location}
                        salary={job.salary}
                        jobId={job.id}
                        color={job.color}
                        isApplied={props.applies}
                    />
                ))}
            </div>
        </section>
    )
}

export default JobsSection