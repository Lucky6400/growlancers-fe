"use client"

import { components } from "./data"



export function NavMenu() {
    return (
       <ul className="list-none flex items-center h-full pt-4">
        {components.map(component => (
        <li className="p-3 cursor-pointer hover:border-white border-b-2 border-transparent text-gray-100 hover:text-white transition-all ease-in-out h-full" title={component.description}>
            {component.title}
        </li>
        ))}
       </ul>
    )
}


