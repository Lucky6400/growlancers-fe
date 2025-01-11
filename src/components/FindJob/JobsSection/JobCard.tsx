import { Button } from "@/components/ui/button";
import { BookMarkedIcon, BookmarkPlusIcon } from "lucide-react";
import { CiWarning } from "react-icons/ci";
import { useState } from "react";

// Props type for the JobCard
type JobCardProps = {
    date: string;
    company: string;
    position: string;
    tags: string[];
    location: string;
    salary: string;
    jobId: number;
    color: string;
};

// JobCard Component
const JobCard = ({
    date,
    company,
    position,
    tags,
    location,
    salary,
    jobId,
    color
}: JobCardProps) => {

    const [bookmarks, setBookmarks] = useState<number[]>([])

    const onAddToBookmark = (id: number) => {
        setBookmarks((prevBookmarks) =>
            prevBookmarks.includes(id)
                ? prevBookmarks.filter((bookmark) => bookmark !== id)
                : [...prevBookmarks, id]
        );
    };
    
    return (
        <div className="p-1 border-gray-400 border rounded-xl max-w-full w-72">
            <div className={"w-full p-2 rounded-xl " + color}>
                <div className="flex w-full mb-3 justify-between">
                    <p className="bg-white py-1 px-2 text-sm rounded-full">{date}</p>
                    <button onClick={() => onAddToBookmark(jobId)}>
                        {bookmarks.includes(jobId) ? <BookMarkedIcon /> : <BookmarkPlusIcon />}

                    </button>
                </div>
                <p className="text-sm font-semibold text-gray-600">{company}</p>
                <p className="text-xl mt-2 mb-3">{position}</p>
                <div className="flex flex-wrap w-full gap-2">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 text-sm rounded-full border border-black"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <p className="text-sm mt-4 text-gray-700">{location}</p>
            </div>
            <p className="text-xl my-2 p-2 font-semibold text-green-900">{salary}</p>
            <div className="flex w-full p-2 pt-0 items-center gap-2">
                <Button>Apply</Button>
                <Button>Details</Button>
                <Button className="bg-red-700 hover:bg-red-900">
                    Report <CiWarning />
                </Button>
            </div>
        </div>
    );
};

export default JobCard