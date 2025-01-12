import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type FilterProps = {
    icon: React.ReactElement;
    options: Option[];
    placeholder: string;
    onChange: (value: string) => void;
    defaultValue: string;
};

const Filter = ({ icon, options, placeholder, onChange, defaultValue }: FilterProps) => {
    const handleValueChange = (newVal: string) => {
        onChange(newVal);
    };

    return (
        <div className="flex w-1/5 max-md:w-full items-center gap-2 border-r border-gray-400 px-4 text-white">
            {icon}
            <Select onValueChange={handleValueChange} value={defaultValue}>
                <SelectTrigger className={`w-[180px] ${defaultValue ? "text-white" : "text-gray-600"}`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;
