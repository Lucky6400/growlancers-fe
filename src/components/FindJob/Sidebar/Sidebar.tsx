import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside
            className={`${isOpen ? "w-1/4" : "w-16"
                } border-r-2 border-gray-300  transition-all duration-300 relative`}
        >
            {/* Toggle Button */}
            <button
                className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
                onClick={toggleSidebar}
            >
                {isOpen ? <ArrowLeft /> : <ArrowRight />}
            </button>

            {/* Sidebar Content */}
            {isOpen && (
                <div className="p-4 space-y-6">
                    <h2 className="text-2xl font-semibold">Filters</h2>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">Work Schedule</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Full-time</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Part-time</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Project Based</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">Timings</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Night Shift</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Evening Shift</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Morning Shift</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Day Shift</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="checkbox" />
                                <span>Flexible</span>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
