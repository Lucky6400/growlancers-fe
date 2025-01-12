import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

type SalaryRangeProps = {
    salaryType: string;
    onChange: (value: number) => void;
};

const salaryTypeRanges: { [type: string]: {min: number, max: number} } = {
    "Per Month": { min: 1000, max: 10000 },
    "Per Year": { min: 12000, max: 120000 },
    "Per Hour": { min: 10, max: 100 },
};

const SalaryRange = ({ salaryType, onChange }: SalaryRangeProps) => {
    const [val, setVal] = useState(500);
    const [range, setRange] = useState({ min: 400, max: 5000 });

    useEffect(() => {
        // Update the range based on the salary type
        if (salaryType && salaryTypeRanges[salaryType]) {
            setRange(salaryTypeRanges[salaryType]);
            setVal(salaryTypeRanges[salaryType].min); // Reset to min when type changes
        }
    }, [salaryType]);

    const handleValueChange = (newVal: number[]) => {
        const salary = newVal[0];
        setVal(salary);
        onChange(salary);
    };

    return (
        <div className="w-1/5  max-md:w-full px-4">
            <div className="flex items-center gap-4 text-white mb-3">
                <p>Salary Range</p>
                <p>${range.min} - ${val}</p>
            </div>
            <Slider
                onValueChange={handleValueChange}
                defaultValue={[range.min]}
                max={range.max}
                step={1}
                min={range.min}
            />
        </div>
    );
};

export default SalaryRange;
