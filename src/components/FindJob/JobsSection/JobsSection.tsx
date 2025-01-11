import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import JobCard from "./JobCard"
import { jobData } from "./data"
const JobsSection = () => {
    return (
        <section className="w-3/4 p-4">
            <div className="flex items-center justify-between w-full mb-5">
                <h1 className="text-3xl font-semibold">Available Jobs</h1>
                <div className="flex gap-2 items-center text-sm">
                    <p className="text-gray-400 font-semibold">Sort by:</p>
                    <Select defaultValue={"latest"}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                            <SelectItem value="salary">Salary</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="w-full flex flex-wrap items-start gap-4">
                {jobData.map((job) => (
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
                    />
                ))}
            </div>
        </section>
    )
}

export default JobsSection