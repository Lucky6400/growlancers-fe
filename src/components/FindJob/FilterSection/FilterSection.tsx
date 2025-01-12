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
import { useState } from "react";

const FilterSection = () => {
    const dispatch = useDispatch();
    const salaryType = useSelector((state: RootState) => state.filter.salaryType);
    const filters = useSelector((s: RootState) => s.filter);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // For mobile menu toggle

    // Handle filter changes
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

    // Apply filters
    const applyFilters = () => {
        // Logic to apply filters, or trigger any other actions
        console.log("Filters Applied:", filters);
        setIsMobileMenuOpen(false); // Close the filter menu after applying
    };

    return (
        <section className="bg-primary p-5 flex flex-wrap md:flex-nowrap items-center justify-between">
            {/* Mobile View Button for Toggle */}
            <div className="md:hidden w-full">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition-all"
                >
                    {isMobileMenuOpen ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            {/* Mobile View Dropdown for Filters */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full mt-4 bg-gray-800 p-4 rounded-md shadow-lg">
                    {/* Job Type Filter */}
                    <Filter
                        defaultValue={filters.jobType}
                        icon={<SearchIcon />}
                        options={jobTypes}
                        placeholder="Job Type"
                        onChange={(val) => handleFilterChange("jobType", val)}
                    />
                    {/* Work Experience Filter */}
                    <Filter
                        defaultValue={filters.workExp}
                        icon={<Briefcase />}
                        options={workExperience}
                        placeholder="Work Experience"
                        onChange={(val) => handleFilterChange("workExp", val)}
                    />
                    {/* Work Location Filter */}
                    <Filter
                        defaultValue={filters.location}
                        icon={<Navigation />}
                        options={workLocations}
                        placeholder="Work Location"
                        onChange={(val) => handleFilterChange("location", val)}
                    />
                    {/* Salary Type Filter */}
                    <Filter
                        defaultValue={filters.salaryType}
                        icon={<DollarSign />}
                        options={salaryTypes}
                        placeholder="Salary Type"
                        onChange={(val) => handleFilterChange("salaryType", val)}
                    />
                    {/* Salary Range Filter */}
                    <SalaryRange
                        salaryType={salaryType}
                        onChange={(val) => handleFilterChange("salaryRange", val)}
                    />
                    {/* Apply Filters Button */}
                    <div className="mt-4">
                        <button
                            onClick={applyFilters}
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}

            {/* Desktop View Filters */}
            <div className="hidden md:flex space-x-4">
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
            </div>
        </section>
    );
};

export default FilterSection;
