"use client"

import { components } from "./data"
import { Link } from 'react-router-dom';

export function NavMenu() {
    return (
        <ul className="list-none flex items-center h-full pt-4">
        {components.map(component => (
          <li
            key={component.title}
            className="p-3 cursor-pointer hover:border-white border-b-2 border-transparent text-gray-100 hover:text-white transition-all ease-in-out h-full"
            title={component.description}
          >
            {/* Use Link for navigation */}
            <Link to={component.href} className="text-gray-100 hover:text-white">
              {component.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}


