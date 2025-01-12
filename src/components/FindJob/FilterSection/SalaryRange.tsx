import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const SalaryRange = () => {
    const [val, setVal] = useState(500)

    //Todo: min and max values based on salary type
    return (
        <div className="w-1/5 px-4">
            <div className="flex items-center gap-4 text-white mb-3">
                <p>Salary Range</p>
                <p>$400 - ${val}</p>
            </div>
            <Slider onValueChange={newVal => setVal(newVal[0])} defaultValue={[1000]} max={500000} step={50} min={400} />

        </div>
    )
}

export default SalaryRange