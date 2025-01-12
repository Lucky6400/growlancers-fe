import { useDispatch, useSelector } from "react-redux";
import {
    setJobType,
    setWorkExp,
    setLocation,
    setSalaryType,
    setSalaryRange,
} from "@/redux/reducers/filterslice";
import { Briefcase, DollarSign, Navigation, SearchIcon } from "lucide-react";
import Filter from "./Filter";
import SalaryRange from "./SalaryRange";
import { jobTypes, salaryTypes, workExperience, workLocations } from "./data";

const FilterSection = () => {
    const dispatch = useDispatch();
    const salaryType = useSelector((state: RootState) => state.filter.salaryType); // Select from Redux state
    const filters = useSelector((s: RootState) => s.filter)
    const handleFilterChange = (type: string, value: string | number) => {
        switch (type) {
            case "jobType":
                dispatch(setJobType(value as string));
                break;
            case "workExp":
                dispatch(setWorkExp(value as string));
                break;
            case "location":
                dispatch(setLocation(value as string));
                break;
            case "salaryType":
                dispatch(setSalaryType(value as string));
                break;
            case "salaryRange":
                dispatch(setSalaryRange(value as number));
                break;
            default:
                break;
        }
    };

    return (
        <section className="bg-primary p-5 flex items-center justify-between">
            <Filter
                defaultValue={filters.jobType}
                icon={<SearchIcon />}
                options={jobTypes}
                placeholder="Job Type"
                onChange={(val) => handleFilterChange("jobType", val)}
            />

            <Filter
                defaultValue={filters.workExp}
                icon={<Briefcase />}
                options={workExperience}
                placeholder="Work Experience"
                onChange={(val) => handleFilterChange("workExp", val)}
            />

            <Filter
                defaultValue={filters.location}
                icon={<Navigation />}
                options={workLocations}
                placeholder="Work Location"
                onChange={(val) => handleFilterChange("location", val)}
            />

            <Filter
                defaultValue={filters.salaryType}
                icon={<DollarSign />}
                options={salaryTypes}
                placeholder="Salary Type"
                onChange={(val) => handleFilterChange("salaryType", val)}
            />

            <SalaryRange
                salaryType={salaryType}
                onChange={(val) => handleFilterChange("salaryRange", val)}
            />
        </section>
    );
};

export default FilterSection;
