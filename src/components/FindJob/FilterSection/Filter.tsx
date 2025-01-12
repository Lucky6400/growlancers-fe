import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

const Filter = ({ icon, options, placeholder }: { icon: React.ReactElement, options: Option[], placeholder: string }) => {
    const [val, setVal] = useState('')
    return (

        <div className="flex w-1/5 items-center gap-2 border-r border-gray-400 px-4 text-white">
            {icon}
            <Select onValueChange={(newVal) => setVal(newVal)}>
                {val ? <SelectTrigger className="w-[180px] text-white">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger> : <SelectTrigger className="w-[180px] text-gray-600">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>}

                <SelectContent>
                    {options.map(option => (
                        <SelectItem value={option.value}>{option.label}</SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    )
}

export default Filter